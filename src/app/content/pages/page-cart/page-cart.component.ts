import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { Product } from "../../../core/models/models";
import { takeUntil } from "rxjs/operators";
import { Router } from "@angular/router";
import { selectCart } from "../../../core/state/products.state";

@Component({
    selector: 'app-page-cart',
    templateUrl: './page-cart.component.html',
    styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent implements OnInit, OnDestroy {
    cartProducts$: Observable<Product[]>;

    private unsubscribe$ = new Subject<void>();

    constructor(
        private store: Store,
        private router: Router
    ) {}

    ngOnInit() {
        this.cartProducts$ = this.store.select(selectCart)
            .pipe(takeUntil(this.unsubscribe$));
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    navigateToMain() {
        this.router.navigate(['main']);
    }

}
