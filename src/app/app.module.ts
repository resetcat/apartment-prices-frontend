import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { ResponseApartmentPricesComponent } from './page/table/response-apartment-prices.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {ToastrModule} from "ngx-toastr";
import { SavedApartmentPriceComponent } from './page/saved-table/saved-apartment-price.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponseApartmentPricesComponent,
    SavedApartmentPriceComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
