import { Component } from '@angular/core';
import {ApartmentPriceServices} from "../../services/apartment-price-services.service";
import {ToastrService} from "ngx-toastr";
import {ApartmentData} from "../../models/apartment-price-beckend-data.model";

@Component({
  selector: 'app-saved-table',
  templateUrl: './saved-apartment-price.component.html',
  styleUrls: ['./saved-apartment-price.component.css']
})
export class SavedApartmentPriceComponent {
  table?: ApartmentData[];

  constructor(private service:ApartmentPriceServices, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getSavedApartmentData();
  }

  deleteRow(id:number) {
    this.service.deleteSavedRow(id);
    this.toastr.info("deleted")
    this.getSavedApartmentData();
  }

  getSavedApartmentData(){
    this.service.getSavedData().subscribe(response=>this.table = response);
  }
}
