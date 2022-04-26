import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsNavbarComponent } from './components/cards-navbar/cards-navbar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SquareCardsComponent } from './components/allCards/square-cards/square-cards.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterButtonComponent } from './components/footer-button/footer-button.component';
import { AppRoutingModule } from './app-routing.module';
import { NotizieCardsComponent } from './components/allCards/notizie-cards/notizie-cards.component';
import { EaplayCardsComponent } from './components/allCards/eaplay-cards/eaplay-cards.component';
import { FifaCardsComponent } from './components/allCards/fifa-cards/fifa-cards.component';
import { ApexCardsComponent } from './components/allCards/apex-cards/apex-cards.component';
import { BattlefieldCardsComponent } from './components/allCards/battlefield-cards/battlefield-cards.component';
import { F1CardsComponent } from './components/allCards/f1-cards/f1-cards.component';
import { InsideCardsComponent } from './components/allCards/inside-cards/inside-cards.component';
import { CardBottomComponent } from './components/card-bottom/card-bottom.component';
import { VerticalDrawerComponent } from './components/vertical-drawer/vertical-drawer.component';
import { CardTopComponent } from './components/card-top/card-top.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsNavbarComponent,
    SideBarComponent,
    SquareCardsComponent,
    MenuBarComponent,
    FooterComponent,
    FooterButtonComponent,
    NotizieCardsComponent, 
    EaplayCardsComponent, 
    FifaCardsComponent,
    ApexCardsComponent,
    BattlefieldCardsComponent,
    F1CardsComponent,
    InsideCardsComponent,
    CardBottomComponent,
    VerticalDrawerComponent,
    CardTopComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
