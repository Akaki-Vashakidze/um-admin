import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { UmService } from 'src/app/modules/um/service/um.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  emailFormControl!: FormGroup;
  clients = ['client 1', 'client 2', 'client 3', 'client 4', 'client 5', 'client 6', 'client 7',]
  users = ['user 1', 'user 2', 'user 3', 'user 4', 'user 5', 'user 6', 'user 7',]
  columns = ['id', 'სახელი', 'აღწერა', 'keyword', 'actions']
  listData: any;

  constructor(private breadcrumbService: BreadcrumbService,private _umService: UmService, private _activatedRoute: ActivatedRoute, private _router: Router) { }
  dataType!: string;
  type!: string;
  paging = { length: 5, pageSize: 10, pageIndex: 0 }
  tableColumns: Array<any> = ['id', 'name', 'description', 'keyword', 'actions'];
  tableHeaders = ['id', 'სახელი', 'აღწერა', 'keyword', 'actions']
  pageSizeOptions = [3, 5, 10]
  tableData: any;
  id!: string;
  searchQuery:string = ''

  async ngOnInit() {
    this.dataType = this._activatedRoute.snapshot.params['type']
    if (this.dataType == 'apps') {
      let response = await this._umService.getAppsList({}, { 'page': this.paging.pageIndex, 'size': this.paging.pageSize })
      this.listData = response.result.data
      this.type = 'აპლიკაცია'
    } if (this.dataType == 'clients') {
      this.listData = this.clients
      this.type = 'კლიენტი'
    } if (this.dataType == 'users') {
      this.listData = this.users
      this.type = 'მომხმარებელი'
    }

    // this.breadcrumbService.set('@List', this.dataType + ' List');
  }
  openTable() {
    // this._router.navigate(['/list/' + this.dataType + '/table'])
  }

  async getClients(id: string, page: number, size: number, searchQuery:string) {
    // this.id = id;
    // let response = await this._umService.getAppClients({ applicationId: id ,searchQuery:searchQuery }, { 'page': page, 'size': size })
    // this.tableData = response.result.data
    // this.paging.length = this.tableData.length
  }

  search(item:any){
    let searchQuery = item.value
    this.getClients(this.id,this.paging.pageIndex,this.paging.pageSize,searchQuery)
  }

  pageChange(ev: PageEvent) {
    this.paging.pageIndex = ev.pageIndex;
    this.paging.pageSize = ev.pageSize;
    this.getClients(this.id, this.paging.pageIndex, this.paging.pageSize,this.searchQuery)
  }
}
