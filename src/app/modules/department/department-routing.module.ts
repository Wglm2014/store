import { Routes, RouterModule } from "@angular/router";
import { DepartmentComponent } from './department.component';
import { NgModule } from '@angular/core';
import { MunicipalityComponent } from '../municipality/municipality.component';


const routes: Routes = [
  { path: 'department', component: DepartmentComponent },
  { path: 'municipality/:id/:title', component: MunicipalityComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeparmentRoutingModule { }
