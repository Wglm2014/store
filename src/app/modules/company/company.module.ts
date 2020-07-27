import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { BranchService } from 'src/app/services/branch.service';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../primeng.module';
import { MessageService } from 'primeng/api';
import { CompanyService } from 'src/app/services/company.service';
import { DepartmentMunicipalityComponent } from '../department-municipality/department-municipality.component';


@NgModule({
  declarations: [CompanyComponent, CompanyCreateComponent, DepartmentMunicipalityComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  providers: [CompanyService, BranchService, MessageService]
})
export class CompanyModule { }
