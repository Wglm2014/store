import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeparmentRoutingModule } from './department-routing.module';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentComponent } from './department.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';



@NgModule({
  declarations: [DepartmentComponent,DepartmentCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    DeparmentRoutingModule
  ],
  providers:[DepartmentService]
})
export class DepartmentModule { }
