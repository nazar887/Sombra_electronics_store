import { Component, Input } from '@angular/core';
import { Product } from "../../../core/models/models";

@Component({
  selector: 'app-cart-summary-card',
  templateUrl: './cart-summary-card.component.html',
  styleUrls: ['./cart-summary-card.component.scss']
})
export class CartSummaryCardComponent {
  @Input() product: Product;

}
