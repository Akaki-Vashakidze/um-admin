import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  emailFormControl!:FormGroup;
  apps = ['app 1', 'app 2', 'app 3', 'app 4', 'app 5', 'app 6', 'app 7',]
  clients = ['client 1', 'client 2', 'client 3', 'client 4', 'client 5', 'client 6', 'client 7',]
  users = ['user 1', 'user 2', 'user 3', 'user 4', 'user 5', 'user 6', 'user 7',]
  listData:any;
  constructor(private _activatedRoute:ActivatedRoute){ }
  dataType!:string;
  type!:string;
  ngOnInit(): void {
    this.dataType = this._activatedRoute.snapshot.params['id']
   if( this.dataType == 'apps') {
    this.listData = this.apps
    this.type = 'აპლიკაცია'
   }  if( this.dataType == 'clients') {
    this.listData = this.clients
    this.type = 'კლიენტი'
   }    if( this.dataType == 'users') {
    this.listData = this.users
    this.type = 'მომხმარებელი'
   } 
  }
}
