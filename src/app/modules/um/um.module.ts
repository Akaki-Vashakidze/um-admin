import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent} from './dashboard/dashboard.component';
import { UmRoutingModule } from './um-routing.module';
import { UmComponent } from './um.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UmComponent
  ],
  imports: [
    UmRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports:[
    SharedModule
  ]
})
export class UMModule { }
