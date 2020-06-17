import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { BranchService } from 'src/app/services/branch.service';

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule
  ],
  providers: [BranchService]
})
export class CompanyModule { }
