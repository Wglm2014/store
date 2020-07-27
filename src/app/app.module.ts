import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuComponent } from './modules/menu/menu.component';
import { PrimengModule } from './primeng.module';
import { CompanyService } from './services/company.service';
import { MaterialModule } from './material.module';
import { InterceptorService } from './services/interceptor.service'

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
    PrimengModule,
    MaterialModule
  ],
  exports: [HttpClientModule, PrimengModule, FormsModule, MaterialModule],
  providers: [CompanyService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
