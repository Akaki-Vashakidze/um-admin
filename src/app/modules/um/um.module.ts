import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { UmRoutingModule } from './um-routing.module';
import { UmComponent } from './um.component';


@NgModule({
  declarations: [
    HomePageComponent,
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
