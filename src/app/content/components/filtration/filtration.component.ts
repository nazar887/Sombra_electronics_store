import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import * as productsActions from "../../../core/state/products.actions";
import * as productsSelectors from "../../../core/state/products.state";
import { selectAllProducts } from "../../../core/state/products.state";

@Component({
    selector: 'app-filtration',
    templateUrl: './filtration.component.html',
    styleUrls: ['./filtration.component.scss']
})
export class FiltrationComponent implements OnInit {
    productTypes: string[] = ['TVs', 'Appliances', 'Phones', 'Video Games'];
    priceRanges: number[] = [100, 500, 700, 900];
    selectedMinPrice: number = 0;
    selectedMaxPrice: number;
    selectedType: string;
    maxPrice: number;

    constructor(private store: Store) {
    }

    ngOnInit(): void {
        this.store.pipe(select(productsSelectors.selectAllProducts)).subscribe(data => {
            this.maxPrice = data.reduce((max, product) => (product.price > max ? product.price : max), 0);
        });
    }

    updateSelectedMaxPrice(price: number) {
        this.selectedMaxPrice = this.selectedMaxPrice === price ?  this.maxPrice : price;
        this.store.dispatch(productsActions.filterProductsByPrice({
            selectedMinPrice: this.selectedMinPrice,
            selectedMaxPrice: this.selectedMaxPrice,
        }));
    }

    onTypeChange() {
        this.store.dispatch(
            productsActions.filterProductsByType({ selectedType: this.selectedType })
        );
    }


}
