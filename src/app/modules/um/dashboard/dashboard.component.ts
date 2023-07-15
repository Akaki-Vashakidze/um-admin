import { Component, OnInit } from '@angular/core';
import { UmService } from '../service/um.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  apps!: number
  clients!: number
  users!: number
  constructor(private _umService: UmService) { }

  async ngOnInit() {
    let result = await this._umService.searchData()
    console.log(result)
    if (result) {

    }
  }
}
