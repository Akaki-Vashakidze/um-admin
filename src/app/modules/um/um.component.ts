import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-um',
  templateUrl: './um.component.html',
  styleUrls: ['./um.component.scss']
})
export class UmComponent implements OnInit{
constructor(private breadcrumbService: BreadcrumbService){
}

ngOnInit(): void {
  this.breadcrumbService.set('@um',' UM');
}
}
