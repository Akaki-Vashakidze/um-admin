import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UmComponent } from './um.component';
import { AuthGuard } from '../auth/guards/auth-guard.service';
import { ListComponent } from '../shared/components/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: UmComponent,
    canActivateChild:[AuthGuard],
    data: { breadcrumb: {alias: 'um'} },
    children: [
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard',
        component: DashboardComponent,
        data: { breadcrumb: {alias: 'Dashboard'} }
      },
      {
        path:'list/:type',
        component: ListComponent,
        data: { breadcrumb: {alias: 'List'} }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UmRoutingModule { }
