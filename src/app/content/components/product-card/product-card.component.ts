import { Component, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ProductDetailsModalComponent } from "../product-details-modal/product-details-modal.component";
import { Product } from "../../../core/models/models";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product;
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const productId = this.product.id;

    this.dialog.open(ProductDetailsModalComponent, {
      width: '90vw',
      height: '90vh',
      data: { productId: productId }
    });
  }

}
