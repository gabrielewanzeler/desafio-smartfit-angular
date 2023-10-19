import { Component, Input } from '@angular/core';
import { Location } from 'src/app/types/location.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() card!: Location;

  constructor (){ }
}
