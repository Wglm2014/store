import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunicipalityComponent } from './municipality.component';
import { DepartmentComponent } from '../department/department.component';


const routes: Routes = [
  { path: "municipality", component: MunicipalityComponent },
  { path: "department", component: DepartmentComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class MunicipalityRoutingModule { }
