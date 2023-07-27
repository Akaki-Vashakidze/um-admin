import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-base-compoennt',
  template: '',
})
export class BaseComponent implements OnDestroy {
  subscriptions: Subscription[] = [];
  public lang!: string;

  constructor(private _translations: TranslationService) {
    this.subscriptions.push(this._translations.lang.subscribe(lang => this.lang = lang));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }

  setLang(lang: string) {
    this._translations.setLang(lang);
  }
}
