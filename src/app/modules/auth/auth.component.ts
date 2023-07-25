import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../shared/loading/loading.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  loading!:boolean;
constructor(private _loadingService:LoadingService){}
ngOnInit(): void {
  this._loadingService.loading.subscribe((loading) => {
    this.loading = loading
  })
}
}
