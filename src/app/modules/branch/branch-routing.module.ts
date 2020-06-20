import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BranchComponent } from './branch.component';


const routes: Routes = [
  { path: 'branch', component: BranchComponent }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class BranchRoutingModule { }
