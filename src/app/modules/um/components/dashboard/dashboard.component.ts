import { Component, OnInit } from '@angular/core';
import { UmService } from '../../service/um.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  apps!: number
  clients!: number
  users!: number
  constructor(private _umService: UmService, private _router:Router) { }

  async ngOnInit() {
    let result = await this._umService.searchData()
    if (result) {
      this.apps = result.result.data.appCount
      this.clients = result.result.data.clientCount
      this.users = result.result.data.userCount
    }
  }

  openList(listType:string){
    listType == 'apps' && this._router.navigate(['list/apps'])
    listType == 'users' && this._router.navigate(['list/users'])
    listType == 'clients' && this._router.navigate(['list/clients'])
  }

}
