import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResponseApartmentPricesComponent} from "./page/table/response-apartment-prices.component";
import {RouterModule, Routes} from "@angular/router";
import {SavedApartmentPriceComponent} from "./page/saved-table/saved-apartment-price.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'planner',
    pathMatch: 'full',
  },
  {
    path: 'table',
    component: ResponseApartmentPricesComponent,
  },
  {
    path: 'savedTable',
    component: SavedApartmentPriceComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
