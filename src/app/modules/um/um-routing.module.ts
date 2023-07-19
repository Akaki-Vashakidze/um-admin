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
    children: [
      {
        path: '',
        redirectTo:'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'apps',
        loadChildren: () => import('./modules/apps/apps.module').then(m => m.AppsModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/users/user.module').then(m => m.UsersModule)
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'list/:id',
        component: ListComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UmRoutingModule { }
