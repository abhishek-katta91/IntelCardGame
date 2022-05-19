import { Injectable } from '@angular/core';
import { Card } from '../shared/models/card.model';
import { HttpClient, HttpResponse, HttpHeaders, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  public deckSize = 1;
  public numberOfCards = 5;
  private sortApiUrl: string;

  public deck: Card[] = [];
  public cards: Card[] = [];
  public sortedCards: string[] = [];

  constructor(private httpClient: HttpClient) {
    this.initialize();
    //this.sortApiUrl = "https://localhost:44369/api/card/sort";
    this.sortApiUrl = "https://cardsortgame.azurewebsites.net/api/card/sort";
  }

  public initialize(): void {
    this.deck = [];
    this.cards = [];
    this.sortedCards = [];
      this.generateCards('2C', 1);
      this.generateCards('3C', 1);
      this.generateCards('4C', 1);
      this.generateCards('5C', 1);
      this.generateCards('6C', 1);
      this.generateCards('7C', 1);
      this.generateCards('8C', 1);
      this.generateCards('9C', 1);
      this.generateCards('10C', 1);
      this.generateCards('JC', 1);
      this.generateCards('QC', 1);
      this.generateCards('KC', 1);
      this.generateCards('AC', 1);

      this.generateCards('2D', 1);
      this.generateCards('3D', 1);
      this.generateCards('4D', 1);
      this.generateCards('5D', 1);
      this.generateCards('6D', 1);
      this.generateCards('7D', 1);
      this.generateCards('8D', 1);
      this.generateCards('9D', 1);
      this.generateCards('10D', 1);
      this.generateCards('JD', 1);
      this.generateCards('QD', 1);
      this.generateCards('KD', 1);
      this.generateCards('AD', 1);

      this.generateCards('2H', 1);
      this.generateCards('3H', 1);
      this.generateCards('4H', 1);
      this.generateCards('5H', 1);
      this.generateCards('6H', 1);
      this.generateCards('7H', 1);
      this.generateCards('8H', 1);
      this.generateCards('9H', 1);
      this.generateCards('10H', 1);
      this.generateCards('JH', 1);
      this.generateCards('QH', 1);
      this.generateCards('KH', 1);
      this.generateCards('AH', 1);

      this.generateCards('2S', 1);
      this.generateCards('3S', 1);
      this.generateCards('4S', 1);
      this.generateCards('5S', 1);
      this.generateCards('6S', 1);
      this.generateCards('7S', 1);
      this.generateCards('8S', 1);
      this.generateCards('9S', 1);
      this.generateCards('10S', 1);
      this.generateCards('JS', 1);
      this.generateCards('QS', 1);
      this.generateCards('KS', 1);
      this.generateCards('AS', 1);


      this.generateCards('4T',1);
      this.generateCards('2T',1);
      this.generateCards('ST',1);
      this.generateCards('PT',1);
      this.generateCards('RT',1);

    this.deck = this.shuffle(this.deck);
  }

  private generateCards(name: string, value: number): void {
      this.deck.push({
        name: name,
        value: value,
      });
  }

  private shuffle(array: Card[]): Card[] {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  public draw(amount: number) {
    let cards: Card[] = [];
    for (let i = 0; i < amount; i++) {
      const index: number = this.deck.findIndex(card => {
        return card.value
      });
      console.log(index);  
      if (index > -1) {
        cards = cards.concat(this.deck.splice(index, 1));
      } else {
        break;
      }
    }
    this.cards = this.cards.concat(cards);
  }

  public SortCards(){

    let cardSValues = this.cards.map(x=>x.name).join(',');

    this.callSortAPI(cardSValues).subscribe(data=>{
     this.sortedCards = data;})
  }

  private callSortAPI(cards: string) : Observable<string[]>{

    let params = new HttpParams().set('cardValues', cards);
    
    return this.httpClient.get<string[]>(this.sortApiUrl, { params: params });

  }

}