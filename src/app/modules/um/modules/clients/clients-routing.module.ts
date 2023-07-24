import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ClientApplicationsComponent } from './components/client-applications/client-applications.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      {
        path:'',
        redirectTo:'clients/emptyCard',
        pathMatch:'full',
      },
      { path: 'clients/:applicationId',
       component: ClientApplicationsComponent,
       data: { breadcrumb: { alias: 'Clients' } }
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }