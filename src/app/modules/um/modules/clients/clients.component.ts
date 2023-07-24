import { Component, OnInit } from '@angular/core';
import { AppsClientsType } from 'src/app/modules/shared/classes/enums';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@Client', 'კლიენტები');
  }

  get type() {
    return AppsClientsType.CLIENTS
  }
}
