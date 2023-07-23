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
    path: '',
    loadChildren: () => import('./modules/um/um.module').then(m => m.UMModule),
    data: { breadcrumb: { skip: true } },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
