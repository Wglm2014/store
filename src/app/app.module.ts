import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './modules/menu/menu.component';
import { MaterialModule } from './material.module';
import { CompanyService } from './services/company.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [HttpClientModule, MaterialModule, FormsModule],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
