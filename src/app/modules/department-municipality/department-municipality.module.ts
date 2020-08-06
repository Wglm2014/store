import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../primeng.module'
import { DepartmentMunicipalityComponent } from './department-municipality.component'
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [DepartmentMunicipalityComponent],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
  ],
  exports: [
    DepartmentMunicipalityComponent
  ]
})
export class DepartmentMunicipalityModule { }
