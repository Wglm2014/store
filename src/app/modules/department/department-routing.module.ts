import { Routes, RouterModule } from "@angular/router";
import { DepartmentComponent } from './department.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { NgModule } from '@angular/core';


const routes: Routes=[
  {path:'department',component:DepartmentComponent},
  {path:'department-create',component:DepartmentCreateComponent}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeparmentRoutingModule{}
