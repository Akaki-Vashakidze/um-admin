import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { UmService } from 'src/app/modules/um/service/um.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-application-clients',
  templateUrl: './application-clients.component.html',
  styleUrls: ['./application-clients.component.scss']
})
export class ApplicationClientsComponent implements OnInit {
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

  constructor(private breadcrumbService: BreadcrumbService,private _umService: UmService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((param: any) => {
      if (param.applicationId) {
        this.requestBody.data.applicationId = param.applicationId;
        this.getClients();
      }
    })
  }

  ngOnInit(): void {
    this.breadcrumbService.set('@Apps','აპლიკაციის კლიენტები');
  }

  async getClients() {
    const { data, page } = await this._umService.getAppClients(this.requestBody)
    this.tableData = data
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
