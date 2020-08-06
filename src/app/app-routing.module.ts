import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentModule } from './modules/department/department.module';
import { MunicipalityModule } from './modules/municipality/municipality.module';
import { CompanyModule } from './modules/company/company.module';
import { BranchModule } from './modules/branch/branch.module';



const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DepartmentModule,
    MunicipalityModule,
    CompanyModule,
    BranchModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
