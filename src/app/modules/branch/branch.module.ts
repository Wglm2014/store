import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { BranchService } from 'src/app/services/branch.service';
import { BranchRoutingModule } from './branch-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../../primeng.module';
import { BranchCreateComponent } from './branch-create/branch-create.component';
import { DepartmentMunicipalityModule } from '../department-municipality/department-municipality.module';

@NgModule({
  declarations: [BranchComponent, BranchCreateComponent],
  imports: [
    CommonModule,
    BranchRoutingModule,
    FormsModule,
    PrimengModule,
    DepartmentMunicipalityModule
  ],
  exports: [DepartmentMunicipalityModule],
  providers: [BranchService]
})
export class BranchModule { }
