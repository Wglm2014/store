import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { BranchService } from 'src/app/services/branch.service';
import { BranchRoutingModule } from './branch-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [BranchComponent],
  imports: [
    CommonModule,
    BranchRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [BranchService]
})
export class BranchModule { }
