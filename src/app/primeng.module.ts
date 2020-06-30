import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    TableModule,
    PanelModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    FileUploadModule,
    AutoCompleteModule,
    MessagesModule,
    MessageModule,
    MenuModule,
    MenubarModule,
    MegaMenuModule,
    CardModule
  ],
  exports: [
    TableModule,
    PanelModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    FileUploadModule,
    AutoCompleteModule,
    MessagesModule,
    MessageModule,
    MenuModule,
    MenubarModule,
    MegaMenuModule,
    CardModule
  ],
})
export class PrimengModule { }
