import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { MunicipalityRoutingModule } from './municipality-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../../primeng.module';
import { MunicipalityComponent } from './municipality.component';
import { MunicipalityCreateComponent } from './municipality-create/municipality-create.component';



@NgModule({
  declarations: [MunicipalityComponent, MunicipalityCreateComponent],
  imports: [
    CommonModule,
    MunicipalityRoutingModule,
    FormsModule,
    PrimengModule
  ],
  providers: [MunicipalityService]
})
export class MunicipalityModule { }
