import { Component, Input } from '@angular/core';
import { Product } from "../../../core/models/models";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() products : Product[];

}
