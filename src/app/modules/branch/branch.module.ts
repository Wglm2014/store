import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { BranchService } from 'src/app/services/branch.service';
import { BranchRoutingModule } from './branch-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../../primeng.module';



@NgModule({
  declarations: [BranchComponent],
  imports: [
    CommonModule,
    BranchRoutingModule,
    FormsModule,
    PrimengModule
  ],
  providers: [BranchService]
})
export class BranchModule { }
