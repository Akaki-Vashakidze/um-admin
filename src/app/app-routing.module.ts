import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/um/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'um',
    pathMatch: 'full'
  },
  {
    path: 'um',
    loadChildren: () => import('./modules/um/um.module').then(m => m.UMModule),
    data: { breadcrumb: { skip: true } },
  },
  {
    path: 'apps',
    loadChildren: () => import('./modules/um/modules/apps/apps.module').then(m => m.AppsModule),
    data: { breadcrumb: { skip: true } }
  },
  {
    path: 'clients',
    loadChildren: () => import('./modules/um/modules/clients/clients.module').then(m => m.ClientsModule),
    data: { breadcrumb: { skip: true } }
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/um/modules/users/user.module').then(m => m.UsersModule),
    data: { breadcrumb: { skip: true } }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
