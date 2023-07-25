import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppsClientsType } from 'src/app/modules/shared/classes/enums';
import { LoadingService } from 'src/app/modules/shared/loading/loading.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  loading!:boolean;
  constructor(private breadcrumbService: BreadcrumbService,private _loadingService:LoadingService) { }

  ngOnInit(): void {
    this._loadingService.loading.subscribe((loading) => {
      this.loading = loading
    })

    this.breadcrumbService.set('@App','აპლიკაციები');
  }
  get type() {
    return AppsClientsType.APPS;
  }
}
