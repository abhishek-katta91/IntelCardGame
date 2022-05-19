import { Component } from '@angular/core';
import { CardServiceService } from '../../helpers/card-service.service';

@Component({
  selector: 'app-select-number',
  templateUrl: './select-number.component.html',
  styleUrls: ['./select-number.component.scss']
})
export class SelectNumberComponent {

  constructor(public cardService: CardServiceService) { }

}
