import { Component } from '@angular/core';
import {PostService} from "../../services/post.service";
import {ToastrService} from "ngx-toastr";
import {SavedData} from "../../models/SavedData";

@Component({
  selector: 'app-saved-table',
  templateUrl: './saved-table.component.html',
  styleUrls: ['./saved-table.component.css']
})
export class SavedTableComponent {
  table?: SavedData[];

  constructor(private service:PostService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.service.getSavedData().subscribe(response=>this.table = response);
  }

  deleteRow(id:number) {
    this.service.deleteSavedRow(id);
    this.toastr.info("deleted")
    this.ngOnInit();
  }
}
