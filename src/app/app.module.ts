import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsNavbarComponent } from './cards-navbar/cards-navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { NotizieCardsComponent } from './components/allCards/notizie-cards/notizie-cards.component';
import { EaplayCardsComponent } from './components/allCards/eaplay-cards/eaplay-cards.component';
import { ApexCardsComponent } from './components/allCards/apex-cards/apex-cards.component';
import { FifaCardsComponent } from './components/allCards/fifa-cards/fifa-cards.component';
import { BattlefieldCardsComponent } from './components/allCards/battlefield-cards/battlefield-cards.component';
import { F1CardsComponent } from './components/allCards/f1-cards/f1-cards.component';
import { InsideCardsComponent } from './components/allCards/inside-cards/inside-cards.component';
import { SquareCardsComponent } from './components/allCards/square-cards/square-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsNavbarComponent,
    SideBarComponent,
    MenuBarComponent,
    NotizieCardsComponent,
    EaplayCardsComponent,
    ApexCardsComponent,
    FifaCardsComponent,
    BattlefieldCardsComponent,
    F1CardsComponent,
    InsideCardsComponent,
    SquareCardsComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
