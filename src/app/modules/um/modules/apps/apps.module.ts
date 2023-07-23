import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AppsComponent } from './apps.component';
import { AppsRoutingModule } from './apps-routing.module';
import { BreadcrumbModule } from 'xng-breadcrumb';

@NgModule({
  declarations: [
    AppsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppsRoutingModule,
    BreadcrumbModule
  ],
  bootstrap: [AppsComponent]
})
export class AppsModule { }