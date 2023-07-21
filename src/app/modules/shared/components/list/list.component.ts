import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  emailFormControl!: FormGroup;
  apps = ['app 1', 'app 2', 'app 3', 'app 4', 'app 5', 'app 6', 'app 7',]
  clients = ['client 1', 'client 2', 'client 3', 'client 4', 'client 5', 'client 6', 'client 7',]
  users = ['user 1', 'user 2', 'user 3', 'user 4', 'user 5', 'user 6', 'user 7',]
  columns = ['id','სახელი','აღწერა','keyword','actions']
  listData: any;
  
  constructor(private _activatedRoute: ActivatedRoute, private _router:Router) { }
  dataType!: string;
  type!: string;

  tableColumns: Array<any> = [
    {
      columnDef: 'ID',
      header: 'ID',
      cell: (item: Record<string, any>) => `${item['ID']}`
    },
    {
      columnDef: 'სახელი',
      header: 'სახელი',
      cell: (item: Record<string, any>) => `${item['name']}`
    },
    {
      columnDef: 'აღწერა',
      header: 'აღწერა',
      cell: (item: Record<string, any>) => `${item['description']}`
    },
    {
      columnDef: 'keyword',
      header: 'keyword',
      cell: (item: Record<string, any>) => `${item['keyword']}`
    },
    {
      columnDef: 'actions',
      header: 'actions',
      cell: (item: Record<string, any>) => `${item['actions']}`
    }
  ];

  tableData: any= [
    {ID: 1, name: 'name1', description: 'description' , keyword: 'I', actions: 'H'},
    {ID: 2, name: 'name2', description: 'description' , keyword: 'K', actions: 'H'},
    {ID: 3, name: 'name3', description: 'description' , keyword: 'P', actions: 'H'},
    {ID: 4, name: 'name4', description: 'description' , keyword: 'L', actions: 'H'},
    {ID: 5, name: 'name5', description: 'description' , keyword: 'B', actions: 'H'},
    {ID: 6, name: 'name6', description: 'description' , keyword: 'C', actions: 'H'},
    {ID: 7, name: 'name7', description: 'description' , keyword: 'N', actions: 'H'},
    {ID: 8, name: 'name8', description: 'description' , keyword: 'O', actions: 'H'},
    {ID: 9, name: 'name9', description: 'description' , keyword: 'F', actions: 'H'},
    {ID: 10, name: 'name10', description: 'description' , keyword: 'N', actions: 'H'},
  ]; 


  ngOnInit(): void {
    this.dataType = this._activatedRoute.snapshot.params['type']
    if (this.dataType == 'apps') {
      this.listData = this.apps
      this.type = 'აპლიკაცია'
    } if (this.dataType == 'clients') {
      this.listData = this.clients
      this.type = 'კლიენტი'
    } if (this.dataType == 'users') {
      this.listData = this.users
      this.type = 'მომხმარებელი'
    }
  }
  openTable(){
    // this._router.navigate(['/list/' + this.dataType + '/table'])
  }
}
