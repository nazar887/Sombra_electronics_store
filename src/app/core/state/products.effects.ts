import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import * as productsActions from './products.actions';
import { ProductsService } from '../services/products.service';
import { selectAll } from './products.reducer';
import { selectProductsState } from './products.state';
import { SnackbarService } from "../services/snackbar.service";


@Injectable()
export class ProductsEffects {
    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(productsActions.loadProducts),
            switchMap(() =>
                this.productsService.getProducts().pipe(
                    map((products) => productsActions.loadProductsSuccess({ products })),
                    catchError((error) => of(productsActions.loadProductsFailure({ error })))
                )
            )
        )
    );

    addToCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(productsActions.addToCart),
            withLatestFrom(this.store.pipe(select(selectProductsState))),
            map(([action, state]) => {
                const existingProduct = state.cart.find((product) => product.id === action.product.id);

                if (existingProduct) {
                    return productsActions.getCartProducts();
                }

                const updatedCart = [...state.cart, action.product];
                return productsActions.getCartProductsSuccess({ cartProducts: updatedCart });
            }),
            catchError((error) => {
                this.snackbarService.showSnackbar('Error adding from cart', 'Dismiss', 3000);
                return EMPTY;
            })
        )
    );

    getCartProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(productsActions.getCartProducts),
            withLatestFrom(this.store.pipe(select(selectProductsState))),
            map(([action, state]) =>
                productsActions.getCartProductsSuccess({ cartProducts: state.cart })
            ),
            catchError((error) => {
                this.snackbarService.showSnackbar('Error getting from cart', 'Dismiss', 3000);
                return EMPTY;
            })
        )
    );

    filterProductsByType$ = createEffect(() =>
        this.actions$.pipe(
            ofType(productsActions.filterProductsByType),
            withLatestFrom(this.store.pipe(select(selectProductsState))),
            map(([action, state]) => {
                const filteredProducts = state.selectedType && state.entities ?
                    selectAll(state).filter((product) => product.type === state.selectedType) :
                    selectAll(state)

                return productsActions.filterProductsByTypeSuccess({ filteredProducts });
            }),
            catchError((error) => {
                this.snackbarService.showSnackbar(`Error filtering: ${error}`, 'Dismiss', 3000);
                return EMPTY;
            })
        )
    );

    filterProductsByPrice$ = createEffect(() =>
        this.actions$.pipe(
            ofType(productsActions.filterProductsByPrice),
            withLatestFrom(this.store.pipe(select(selectProductsState))),
            map(([action, state]) => {
                const filteredProducts = state.selectedType && state.entities ?
                    selectAll(state).filter((product) => product.price >= state.selectedMinPrice && product.price <= state.selectedMaxPrice) :
                    selectAll(state)

                return productsActions.filterProductsByTypeSuccess({ filteredProducts });
            }),
            catchError((error) => {
                this.snackbarService.showSnackbar(`Error filtering: ${error}`, 'Dismiss', 3000);
                return EMPTY;
            })
        )
    );

    filterProductsByName$ = createEffect(() =>
        this.actions$.pipe(
            ofType(productsActions.filterProductsByName),
            withLatestFrom(this.store.pipe(select(selectProductsState))),
            map(([action, state]) => {
                const filteredProducts = state.selectedType && state.entities ?
                    selectAll(state).filter(product =>
                        product.name.toLowerCase().includes(state.selectedName.toLowerCase())):
                    selectAll(state)

                return productsActions.filterProductsByTypeSuccess({ filteredProducts });
            }),
            catchError((error) => {
                this.snackbarService.showSnackbar(`Error filtering: ${error}`, 'Dismiss', 3000);
                return EMPTY;
            })
        )
    );



    constructor(
        private store: Store,
        private actions$: Actions,
        private productsService: ProductsService,
        private snackbarService: SnackbarService

    ) {}
}