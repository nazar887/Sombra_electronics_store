import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from './products.reducer';
import { selectAll } from "./products.reducer";

export const selectProductsState = createFeatureSelector<fromProducts.ProductsState>('products');

export const selectAllProducts = createSelector(
    selectProductsState,
    fromProducts.selectAll
);

export const selectProductsLoading = createSelector(
    selectProductsState,
    state => state.loading
);

export const selectProductsError = createSelector(
    selectProductsState,
    state => state.error
);

export const selectProductById = (productId: string) =>
    createSelector(
        selectAllProducts,
        products => products.find(product => product.id === productId)
    );

export const selectCart = createSelector(
    selectProductsState,
    state => state.cart
);

export const selectFilteredProducts = createSelector(
    selectProductsState,
    state => {
        return selectAll(state)
            .filter(product =>
                (!state.selectedType || product.type === state.selectedType) &&
                (state.selectedMinPrice === null ||
                    (product.price >= state.selectedMinPrice && product.price <= state.selectedMaxPrice)) &&
                (!state.selectedName || product.name.toLowerCase().includes(state.selectedName.toLowerCase()))
            );
    }
);
