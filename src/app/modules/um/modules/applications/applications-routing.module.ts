import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications.component';
import { ApplicationClientsComponent } from './components/application-clients/application-clients.component';
const routes: Routes = [
  {
    path: '',
    component: ApplicationsComponent,
    children: [
      { path: 'clients/:applicationId', component: ApplicationClientsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
