import { Component, OnInit } from '@angular/core';
import { UmService } from '../../../../service/um.service';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-applications',
  templateUrl: './client-applications.component.html',
  styleUrls: ['./client-applications.component.scss']
})
export class ClientApplicationsComponent implements OnInit {
  paging = { length: 5, pageSize: 10, pageIndex: 0 }
  tableColumns: Array<any> = ['id', 'name', 'description', 'keyword', 'actions'];
  tableHeaders = ['id', 'სახელი', 'აღწერა', 'keyword', 'actions']
  pageSizeOptions = [3, 5, 10]
  tableData: any;

  requestBody = {
    data: {
      searchQuery: '',
      applicationId: null,
    },
    paging: {
      page: 0,
      size: 10
    }
  }
  constructor(private _umService: UmService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((param: any) => {
      if (param.applicationId) {
        this.requestBody.data.applicationId = param.applicationId;
        this.getClients();
      }
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async getClients() {
    const { data, page } = await this._umService.getAppClients(this.requestBody)
    this.tableData = data.map()
    this.paging.length = page.length
    this.paging.pageSize = page.pageSize
    this.paging.pageIndex = page.pageIndex
  }

  search(item: any) {

    this.requestBody.data.searchQuery = item.value;
    this.getClients()
  }

  pageChange(ev: PageEvent) {
    this.paging.pageIndex = ev.pageIndex;
    this.paging.pageSize = ev.pageSize;
    this.getClients()
  }

}
