import { Component, OnDestroy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { finalize, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { SnackbarService } from "../../../core/services/snackbar.service";
import * as productsActions from '../../../core/state/products.actions';
import { selectProductById } from "../../../core/state/products.state";

@Component({
    selector: 'app-product-details-modal',
    templateUrl: './product-details-modal.component.html',
    styleUrls: ['./product-details-modal.component.scss']
})
export class ProductDetailsModalComponent implements OnDestroy {
    private unsubscribe$: Subject<void> = new Subject<void>();

    constructor(
        public dialogRef: MatDialogRef<ProductDetailsModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { productId: string },
        private store: Store,
        private snackbarService: SnackbarService
    ) {}

    close(): void {
        this.dialogRef.close();
    }

    get selectedProduct$() {
        return this.store.select(selectProductById(this.data.productId));
    }

    addToCart() {
        this.selectedProduct$.pipe(
            take(1),
            takeUntil(this.unsubscribe$),
            finalize(() => this.dialogRef.close())
        ).subscribe((product) => {
            this.store.dispatch(productsActions.addToCart({ product }));
            this.snackbarService.showSnackbar(`${product.name} was successfully added to the cart`);
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
