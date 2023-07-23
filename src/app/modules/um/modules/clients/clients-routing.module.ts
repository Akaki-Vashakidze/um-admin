import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ClientApplicationsComponent } from './client-applications/client-applications.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    data: { breadcrumb: { alias: 'Clients' } }
  },
  {
    path: 'apps',
    component: ClientApplicationsComponent,
    data: { breadcrumb: { alias: 'ClientApplications' } }
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }