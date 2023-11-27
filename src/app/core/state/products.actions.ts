import { createAction, props } from '@ngrx/store';
import { Product } from "../models/models";

export const loadProducts = createAction(
    '[Products] Load Products'
);

export const loadProductsSuccess = createAction(
    '[Products] Load Products Success',
    props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
    '[Products] Load Products Failure',
    props<{ error: any }>()
);

export const addToCart = createAction(
    '[Cart] Add to Cart',
    props<{ product: Product }>()
);

export const getCartProducts = createAction(
    '[Cart] Get Cart Products'
);

export const getCartProductsSuccess = createAction(
    '[Cart] Get Cart Products Success',
    props<{ cartProducts: Product[] }>()
);

export const filterProductsByType = createAction(
    '[Products] Filter Products by Type',
    props<{ selectedType: string | null }>()
);

export const filterProductsByTypeSuccess = createAction(
    '[Products] Filter Products by Type Success',
    props<{ filteredProducts: Product[] }>()
);

export const filterProductsByPrice = createAction(
    '[Products] Filter Products by Price',
    props<{ selectedMinPrice: number | null, selectedMaxPrice: number | null }>()
);

export const filterProductsByName = createAction(
    '[Products] Filter Products by Name',
    props<{ selectedName: string | null }>()
);
