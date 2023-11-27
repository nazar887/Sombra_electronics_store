import { Component } from '@angular/core';
import * as productsActions from "../../../core/state/products.actions";
import { Store } from "@ngrx/store";

@Component({
    selector: 'app-searching-bar',
    templateUrl: './searching-bar.component.html',
})
export class SearchingBarComponent {
    searchedName: string = '';

    constructor(private store: Store) {}

    onFilterByName(): void {
        this.store.dispatch(productsActions.filterProductsByName({ selectedName: this.searchedName }));
    }

}
