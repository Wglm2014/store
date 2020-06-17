import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './modules/department/department.component';
import { MenuComponent } from './modules/menu/menu.component';
import { DepartmentModule } from './modules/department/department.module';
import { MunicipalityComponent } from './modules/municipality/municipality.component';
import { CompanyComponent } from './modules/company/company.component';
import { BranchComponent } from './modules/branch/branch.component';


const routes: Routes = [
  { path: 'home', component: MenuComponent },
  { path: "department", component: DepartmentComponent },
  { path: "municipality", component: MunicipalityComponent },
  { path: "company", component: CompanyComponent },
  { path: "branch", component: BranchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DepartmentModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
