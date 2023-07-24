import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UmComponent } from './um.component';
import { AuthGuard } from '../auth/guards/auth-guard.service';
const routes: Routes = [
  {
    path: 'um',
    component: UmComponent,
    canActivateChild: [AuthGuard],
    data: { breadcrumb: { alias: 'um' } },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { breadcrumb: { alias: 'Dashboard' } }
      },
      {
        path: 'clients',
        loadChildren: () => import('../um/modules/clients/clients.module').then(m => m.ClientsModule),
        data: { breadcrumb: { alias: 'Client' } },
      },
      // {
      //   path: 'users',
      //   loadChildren: () => import('../um/modules/users/user.module').then(m => m.UsersModule),
      //   data: { breadcrumb: { skip: true } }
      // },
      {
        path: 'apps',
        loadChildren: () => import('../um/modules/applications/applications.module').then(m => m.ApplicationsModule),
         data: { breadcrumb: { alias: 'App' } },
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UmRoutingModule { }
