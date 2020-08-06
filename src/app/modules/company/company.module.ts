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


@NgModule({
  declarations: [CompanyComponent, CompanyCreateComponent],
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
