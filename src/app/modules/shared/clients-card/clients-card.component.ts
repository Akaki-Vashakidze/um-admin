import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients-card.component.html',
  styleUrls: ['./clients-card.component.scss']
})
export class ClientsComponent {
@Input() cardTitle!:string;
@Input() amount!:string;
}
