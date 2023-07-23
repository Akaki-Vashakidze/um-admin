import { Component, OnInit } from '@angular/core';
import { AppsClientsType } from 'src/app/modules/shared/classes/enums';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService,) {

  }

  ngOnInit(): void {
    this.breadcrumbService.set('@App','აპლიკაციები');
  }

  get type() {
    return AppsClientsType.APPS;
  }
}
