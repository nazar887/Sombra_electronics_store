import { Component, Input } from '@angular/core';
import { Review } from "../../../core/models/models";

@Component({
  selector: 'app-product-customer-review',
  templateUrl: './product-customer-review.component.html',
  styleUrls: ['./product-customer-review.component.scss']
})
export class ProductCustomerReviewComponent {
  @Input() review: Review;
  showFullComment = false;

  shouldDisplayButton(): boolean {
    return this.review.comment.length > 300;
  }

}
