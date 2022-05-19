import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckOfCardsComponent } from './deck-of-cards/deck-of-cards.component';
import { MaterialModule } from './shared/modules/material.module';
import { SelectNumberComponent } from './deck-of-cards/select-number/select-number.component';
import { DisplayCardsComponent } from './deck-of-cards/display-cards/display-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    DeckOfCardsComponent,
    SelectNumberComponent,
    DisplayCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
