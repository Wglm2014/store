import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './modules/department/department.component';
import { MenuComponent } from './modules/menu/menu.component';
import { DepartmentModule } from './modules/department/department.module';


const routes: Routes = [
  {path:'home',component:MenuComponent},
  {path:"department",component:DepartmentComponent}
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  DepartmentModule

],
  exports: [RouterModule]
})
export class AppRoutingModule { }
