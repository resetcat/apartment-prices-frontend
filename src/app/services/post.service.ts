import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, Observable, Subscription} from "rxjs";
import {PostAPIResponse} from "../models/data.model";
import {SendData} from "../models/sendData.model";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getData(): Observable<PostAPIResponse> {
    const url = `https://data.gov.lv/dati/lv/api/3/action/datastore_search?resource_id=bbe18a38-db35-4e47-9bdc-7f9cf651507b`;

    return this.httpClient.get<PostAPIResponse>(url);
  }

  sendData(data:SendData): Observable<SendData> {
    const url = 'http://localhost:8080/add';

    return this.httpClient.post<SendData>(url,data,)
  }
}