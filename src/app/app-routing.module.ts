import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from "./content/pages/page-main/page-main.component";
import { PageCartComponent } from "./content/pages/page-cart/page-cart.component";
import { PageNotFoundComponent } from "./content/pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: PageMainComponent },
  { path: 'cart', component: PageCartComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
