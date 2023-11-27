import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-summary-order-card',
    templateUrl: './summary-order-card.component.html',
    styleUrls: ['./summary-order-card.component.scss']
})
export class SummaryOrderCardComponent {

    @Input() totalSuma: number;
    @Input() totalCartItem: number;

}
