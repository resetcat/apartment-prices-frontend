import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, Observable, Subscription} from "rxjs";
import {ApartmentData} from "../models/apartment-price-beckend-data.model";
import { HttpHeaders } from '@angular/common/http';
import {ApartmentPriceAPIResponse} from "../models/apartment-price-api-data.model";

@Injectable({
  providedIn: 'root'
})
export class ApartmentPriceServices {
  private errorMessage: any;
  private status?: string;


  constructor(private httpClient: HttpClient) {
  }

  getData(): Observable<ApartmentPriceAPIResponse> {
    const url = `https://data.gov.lv/dati/lv/api/3/action/datastore_search?resource_id=bbe18a38-db35-4e47-9bdc-7f9cf651507b`;

    return this.httpClient.get<ApartmentPriceAPIResponse>(url);
  }

  sendData(data:ApartmentData): Observable<ApartmentData> {
    const url = 'http://localhost:8080/add';

    return this.httpClient.post<ApartmentData>(url,data,)
  }

  getSavedData(): Observable<ApartmentData[]>{
    const url = 'http://localhost:8080/get-all';

    return this.httpClient.get<ApartmentData[]>(url);
  }

  deleteSavedRow(id:number):Subscription{
    const url = `http://localhost:8080/delete/${id}`;
    return this.httpClient.delete<void>(url)
      .subscribe(() => this.status = 'Delete successful')

  }
}
