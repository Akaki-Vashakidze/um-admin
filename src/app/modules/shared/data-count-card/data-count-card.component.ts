import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-count-card',
  templateUrl: './data-count-card.component.html',
  styleUrls: ['./data-count-card.component.scss']
})
export class ClientsComponent {
@Input() cardTitle!:string;
@Input() amount!:number;
}
