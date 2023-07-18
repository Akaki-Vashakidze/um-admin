import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './components/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { ClientsComponent } from './components/data-count-card/data-count-card.component';
import { SettingsCardComponent } from './components/settings-card/settings-card.component';


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
