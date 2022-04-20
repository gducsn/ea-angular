import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsNavbarComponent } from './cards-navbar/cards-navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SquareCardsComponent } from './components/allCards/square-cards/square-cards.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterButtonComponent } from './footer-button/footer-button.component';
import { AppRoutingModule } from './app-routing.module';
import { NotizieCardsComponent } from './components/allCards/notizie-cards/notizie-cards.component';
import { EaplayCardsComponent } from './components/allCards/eaplay-cards/eaplay-cards.component';
import { FifaCardsComponent } from './components/allCards/fifa-cards/fifa-cards.component';
import { ApexCardsComponent } from './components/allCards/apex-cards/apex-cards.component';
import { BattlefieldCardsComponent } from './components/allCards/battlefield-cards/battlefield-cards.component';
import { F1CardsComponent } from './components/allCards/f1-cards/f1-cards.component';
import { InsideCardsComponent } from './components/allCards/inside-cards/inside-cards.component';
<<<<<<< HEAD
import { CardBottomComponent } from './card-bottom/card-bottom.component';
=======
import { VerticalDrawerComponent } from './vertical-drawer/vertical-drawer.component';

>>>>>>> 817b54db465a7b9b2d241682f5827201b58f4cb4
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
<<<<<<< HEAD
    CardBottomComponent


=======
    VerticalDrawerComponent
>>>>>>> 817b54db465a7b9b2d241682f5827201b58f4cb4
    

    
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
