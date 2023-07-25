import { Component, OnInit } from '@angular/core';
import { AppsClientsType } from 'src/app/modules/shared/classes/enums';
import { LoadingService } from 'src/app/modules/shared/loading/loading.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  loading!:boolean;
  constructor(private breadcrumbService: BreadcrumbService,private _loadingService:LoadingService) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@Client', 'კლიენტები'); 
       this._loadingService.loading.subscribe((loading) => {
      this.loading = loading
    })
  }

  get type() {
    return AppsClientsType.CLIENTS
  }
}
