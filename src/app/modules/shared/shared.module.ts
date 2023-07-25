import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './components/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { ClientsComponent } from './components/data-count-card/data-count-card.component';
import { SettingsCardComponent } from './components/settings-card/settings-card.component';
import { ListComponent } from './components/list/list.component';
import { ReusableTableComponent } from './components/reusable-table/reusable-table.component';
import { UmRoutingModule } from '../um/um-routing.module';
import { ClientsAppsComponent } from './components/clients-apps/clients-apps.component';
import { LoadingService } from './loading/loading.service';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    HeaderComponent,
    ClientsComponent,
    SettingsCardComponent,
    ListComponent,
    ReusableTableComponent,
    ClientsAppsComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UmRoutingModule,
    NgxLoadingModule
  ],
  exports:[
    MaterialModule,
    HeaderComponent,
    ClientsComponent,
    SettingsCardComponent,
    ClientsAppsComponent,
    ReusableTableComponent,
    NgxLoadingModule
  ],
  providers:[
    LoadingService
  ]
})
export class SharedModule { }
