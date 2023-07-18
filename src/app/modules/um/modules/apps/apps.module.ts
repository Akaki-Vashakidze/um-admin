import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AppsComponent } from './apps.component';
import { AppsRoutingModule } from './apps-routing.module';


@NgModule({
  declarations: [
    AppsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppsRoutingModule
  ],
  bootstrap: [AppsComponent]
})
export class AppsModule { }