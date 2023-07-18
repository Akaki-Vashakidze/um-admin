import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './data-count-card/data-count-card.component';
import { SettingsCardComponent } from './settings-card/settings-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ClientsComponent,
    SettingsCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule,
    HeaderComponent,
    ClientsComponent,
    SettingsCardComponent
  ]
})
export class SharedModule { }
