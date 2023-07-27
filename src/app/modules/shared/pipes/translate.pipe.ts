import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  translations: any;
  lang: string = 'ge';
  constructor(private _translationService: TranslationService) {
    this.translations = this._translationService.translations;
  }

  transform(value: string, args?: any): any {
    this.lang = args && args == 'en' ? 'en' : "ge"
    if (!this.translations[value] || !this.translations[value][this.lang]) return value;
    return this.translations[value][this.lang];
  }
}
