import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckOfCardsComponent } from './deck-of-cards.component';

describe('DeckOfCardsComponent', () => {
  let component: DeckOfCardsComponent;
  let fixture: ComponentFixture<DeckOfCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckOfCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckOfCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
