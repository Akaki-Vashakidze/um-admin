import { Component } from '@angular/core';
import { AppsClientsType } from 'src/app/modules/shared/classes/enums';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  constructor() {

  }


  get type() {
    return AppsClientsType.CLIENTS
  }
}
