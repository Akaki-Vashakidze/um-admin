import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService){}
  ngOnInit(): void {
    this.breadcrumbService.set('@Dash',' Dash');
  }
}
