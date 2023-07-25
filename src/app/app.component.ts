import { AfterContentInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from './modules/shared/loading/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  loading!: boolean;
  subscripton!: Subscription;
  constructor(private _loadingService: LoadingService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscripton = this._loadingService.loading.subscribe((loading) => {
      this.loading = loading
    })
  }

  ngOnDestroy(): void {
    this.subscripton.unsubscribe()
  }
}
