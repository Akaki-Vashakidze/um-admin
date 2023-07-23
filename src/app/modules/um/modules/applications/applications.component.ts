import { Component } from '@angular/core';
import { AppsClientsType } from 'src/app/modules/shared/classes/enums';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent {

  constructor() {

  }

  get type() {
    return AppsClientsType.APPS;
  }
}
