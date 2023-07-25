import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { LoadingService } from '../shared/loading/loading.service';

@Component({
  selector: 'app-um',
  templateUrl: './um.component.html',
  styleUrls: ['./um.component.scss']
})
export class UmComponent implements OnInit {
  loading!: boolean;
  constructor(private breadcrumbService: BreadcrumbService, private _loadingService: LoadingService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this._loadingService.loading.subscribe((loading) => {
        this.loading = loading
      })
    }, 0);

    this.breadcrumbService.set('@um', ' UM');
  }
}
