import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as productsActions from './products.actions';
import { Product } from '../models/models';


export interface ProductsState extends EntityState<Product> {
    loading: boolean;
    error: string;
    cart: Product[];
    selectedType: string | null;
    selectedMinPrice: number | null;
    selectedMaxPrice: number | null;
    selectedName: string | null;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductsState = adapter.getInitialState({
    loading: false,
    error: null,
    cart: [],
    selectedType: null,
    selectedMinPrice: null,
    selectedMaxPrice:null,
    selectedName: null,
});
export const productsReducer = createReducer(
    initialState,

    on(productsActions.loadProducts,
        (state) => ({ ...state, loading: true, error: null })
    ),

    on(productsActions.loadProductsSuccess,
        (state, { products }) => adapter.setAll(products, {
            ...state,
            loading: false
        })),

    on(productsActions.loadProductsFailure,
        (state, { error }) => ({ ...state, loading: false, error })
    ),

    on(productsActions.addToCart,
        (state, { product }) => ({ ...state, cart: [...state.cart, product] })
    ),

    on(productsActions.getCartProductsSuccess,
        (state, { cartProducts }) => ({ ...state, cart: cartProducts })
    ),


    on(productsActions.filterProductsByType,
        (state, { selectedType }) => ({ ...state, selectedType })
    ),

    on(productsActions.filterProductsByPrice,
        (state, { selectedMinPrice, selectedMaxPrice }) => ({ ...state, selectedMinPrice, selectedMaxPrice })
    ),

    on(productsActions.filterProductsByName,
        (state, { selectedName }) => ({ ...state, selectedName })
    ),

);

export const { selectAll } = adapter.getSelectors();
