import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageMainComponent } from './content/pages/page-main/page-main.component';
import { PageCartComponent } from './content/pages/page-cart/page-cart.component';
import { productsReducer } from "./core/state/products.reducer";
import { StoreModule } from "@ngrx/store";
import { ProductsEffects } from "./core/state/products.effects";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./core/modules/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PageNotFoundComponent } from './content/pages/page-not-found/page-not-found.component';
import { ProductCardComponent } from './content/components/product-card/product-card.component';
import { ProductListComponent } from './content/components/product-list/product-list.component';
import { ProductDetailsModalComponent } from './content/components/product-details-modal/product-details-modal.component';
import { ProductCustomerReviewComponent } from './content/components/product-customer-review/product-customer-review.component';
import { CartSummaryCardComponent } from './content/components/cart-summary-card/cart-summary-card.component';
import { ToolbarComponent } from './content/components/toolbar/toolbar.component';
import { RatingComponent } from './content/components/rating/rating.component';
import { TruncatePipe } from './core/pipes/truncate.pipe';
import { SummaryOrderCardComponent } from './content/components/summary-order-card/summary-order-card.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FiltrationComponent } from './content/components/filtration/filtration.component';
import { SearchingBarComponent } from './content/components/searching-bar/searching-bar.component';
import { CalculateTotalPricePipe } from './core/pipes/calculate-total-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageMainComponent,
    PageCartComponent,
    PageNotFoundComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductDetailsModalComponent,
    ProductCustomerReviewComponent,
    CartSummaryCardComponent,
    ToolbarComponent,
    RatingComponent,
    TruncatePipe,
    SummaryOrderCardComponent,
    FiltrationComponent,
    SearchingBarComponent,
    CalculateTotalPricePipe,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreModule.forFeature('products', productsReducer),
        EffectsModule.forFeature([ProductsEffects]),
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
