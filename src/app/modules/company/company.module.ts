import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { BranchService } from 'src/app/services/branch.service';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [CompanyComponent, CompanyCreateComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [BranchService]
})
export class CompanyModule { }
