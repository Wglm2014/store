import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeparmentRoutingModule } from './department-routing.module';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentComponent } from './department.component';
import { MaterialModule } from 'src/app/material.module';
import { PrimengModule } from '../../primeng.module';
import { DepartmentCreateComponent } from './department-create/department-create.component';


@NgModule({
  declarations: [DepartmentComponent, DepartmentCreateComponent],
  imports: [
    CommonModule,
    DeparmentRoutingModule,
    MaterialModule,
    PrimengModule,
    FormsModule,

  ],
  exports: [FormsModule],
  providers: [DepartmentService]
})
export class DepartmentModule { }
