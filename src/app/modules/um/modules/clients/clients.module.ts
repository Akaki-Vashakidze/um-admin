import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientApplicationsComponent } from './components/client-applications/client-applications.component';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientApplicationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientsRoutingModule
  ],
  exports:[
    SharedModule
  ]
})
export class ClientsModule { }