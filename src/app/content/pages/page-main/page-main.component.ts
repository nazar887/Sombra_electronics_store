import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from "../../../core/models/models";
import * as productsActions from "../../../core/state/products.actions";
import * as productsSelectors from '../../../core/state/products.state';
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss'],
})
export class PageMainComponent implements OnInit {
  loading$: Observable<boolean>;
  error$: Observable<string>;
  filteredProducts$: Observable<Product[]>;
  page = 1;
  pageSize = 10;

  constructor(private store: Store) {}

  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
  }

  ngOnInit() {
    this.filteredProducts$ = this.store.pipe(select(productsSelectors.selectFilteredProducts));
    this.store.dispatch(productsActions.loadProducts());
    this.loading$ = this.store.select(productsSelectors.selectProductsLoading);
    this.error$ = this.store.select(productsSelectors.selectProductsError);
  }
}
