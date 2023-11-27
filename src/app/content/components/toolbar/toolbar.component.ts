import { Component, OnInit } from '@angular/core';
import { Product } from "../../../core/models/models";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCart } from "../../../core/state/products.state";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  cartProducts$: Observable<Product[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.cartProducts$ = this.store.select(selectCart);
  }

}
