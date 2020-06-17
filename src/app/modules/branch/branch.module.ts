import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { BranchService } from 'src/app/services/branch.service';



@NgModule({
  declarations: [BranchComponent],
  imports: [
    CommonModule
  ],
  providers: [BranchService]
})
export class BranchModule { }
