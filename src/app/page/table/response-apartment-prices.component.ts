import {Component, OnInit} from '@angular/core';
import {ApartmentPrice} from "../../models/apartment-price-api-data.model";
import {ApartmentPriceServices} from "../../services/apartment-price-services.service";
import {ApartmentData} from "../../models/apartment-price-beckend-data.model";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-table',
  templateUrl: './response-apartment-prices.component.html',
  styleUrls: ['./response-apartment-prices.component.css']
})
export class ResponseApartmentPricesComponent implements  OnInit{
  posts?: ApartmentPrice[] ;

  constructor(private service:ApartmentPriceServices, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.service.getData().subscribe(response=>this.posts = response.result.records);
  }




  saveRow(data:ApartmentPrice){
  const sendingRow = new ApartmentData(
    data._id,
    data["Gads un pusgads"],
    data["Vidējā cena (EUR/m2) Rīga (centrs)"],
    data["Darījumu skaits Rīga (centrs)"],
    data["Vidējā cena (EUR/m2) Rīga (mikrorajoni)"],
    data["Darījumu skaits Rīga (mikrorajoni)"],
    data["Vidējā cena (EUR/m2) Jūrmala (Sloka, Kauguri)"],
    data["Darījumu skaits Jūrmala (Sloka, Kauguri)"]);

    this.service.sendData(sendingRow).subscribe(
      data =>{this.toastr.success("Saved"); console.log('success', data)},

      error =>{this.toastr.error("Already saved"); console.log('error', error)}
    );


}
}
