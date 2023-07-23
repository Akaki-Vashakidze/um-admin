import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ApplicationRoutingModule } from './applications-routing.module';
import { ApplicationClientsComponent } from './components/application-clients/application-clients.component';



@NgModule({
  declarations: [
    ApplicationsComponent,
    ApplicationClientsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationsModule { }
