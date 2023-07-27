import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent{
@Input() UsernameAndSearch!:Boolean
constructor(private _tr:TranslationService){
  super(_tr)
}
}
