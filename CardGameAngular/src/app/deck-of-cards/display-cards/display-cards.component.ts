import { Component } from '@angular/core';
import { CardServiceService } from 'src/app/helpers/card-service.service';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss'],
})
export class DisplayCardsComponent {

  constructor(public cardService: CardServiceService) { }

}
