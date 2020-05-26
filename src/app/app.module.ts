import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './modules/menu/menu.component';
import { DepartmentComponent } from './modules/department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DepartmentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports:[HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
