import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./page/table/table.component";
import {RouterModule, Routes} from "@angular/router";
import {SavedTableComponent} from "./page/saved-table/saved-table.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'planner',
    pathMatch: 'full',
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'savedTable',
    component: SavedTableComponent,
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
