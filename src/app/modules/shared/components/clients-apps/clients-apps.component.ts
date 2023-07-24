import { Component, Input, OnInit, asNativeElements } from '@angular/core';
import { AppsClientsType } from '../../classes/enums';
import { ClientsAppsListItem } from '../../interfaces/ClientsAppsListItem';
import { UmService } from 'src/app/modules/um/service/um.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients-apps',
  templateUrl: './clients-apps.component.html',
  styleUrls: ['./clients-apps.component.scss']
})
export class ClientsAppsComponent implements OnInit {

  @Input("type") type!: AppsClientsType;
  listData: ClientsAppsListItem[] = [];

  paging = { pageSize: 10, pageIndex: 0 }

  constructor(private _umService: UmService, private _router: Router, private _activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.getList()
  }

  getList() {
    switch (this.type) {
      case AppsClientsType.APPS: {
        this.loadClientList();
      } break;

      case AppsClientsType.CLIENTS: {
        //todo load clients
      } break;
    }
  }


  async loadClientList(): Promise<void> {
    const { data, page } = await this._umService.getAppsList({}, { 'page': this.paging.pageIndex, 'size': this.paging.pageSize })

    this.listData = data.map((d: any) => ({ value: d.id, title: d.name }));
  }

  openTable(value: number) {
    switch (this.type) {
      case AppsClientsType.APPS: {
        this._router.navigate([`applications/${value}`], { relativeTo: this._activatedRoute })
      } break;

      case AppsClientsType.CLIENTS: {
        this._router.navigate([`clients/${value}`], { relativeTo: this._activatedRoute })
      } break;
    }

  }
}
