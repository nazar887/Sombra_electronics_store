import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {

  @Input() value: number;

  getStars(rating: number): number[] {
    return [...Array(Math.floor(rating)).keys()];
  }

}
