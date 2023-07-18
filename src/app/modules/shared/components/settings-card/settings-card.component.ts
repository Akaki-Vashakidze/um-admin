import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-card',
  templateUrl: './settings-card.component.html',
  styleUrls: ['./settings-card.component.scss']
})
export class SettingsCardComponent {
@Input() cardTitle!:string;
}
