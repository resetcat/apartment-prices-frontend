import {Component, OnInit} from '@angular/core';
import {RecordData} from "../../models/data.model";
import {PostService} from "../../services/post.service";
import {SendData} from "../../models/sendData.model";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements  OnInit{
  posts?: RecordData[] ;

  constructor(private service:PostService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.service.getData().subscribe(response=>this.posts = response.result.records);
  }




  saveRow(data:RecordData){
  const sendingRow = new SendData(
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
