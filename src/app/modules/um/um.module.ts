import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { UmRoutingModule } from './um-routing.module';
import { UmComponent } from './um.component';
import { BreadcrumbModule } from 'xng-breadcrumb';


@NgModule({
  declarations: [
    DashboardComponent,
    UmComponent
  ],
  imports: [
    UmRoutingModule,
    CommonModule,
    SharedModule,
    BreadcrumbModule,
  ],
  exports:[
    SharedModule
  ]
})
export class UMModule { }
