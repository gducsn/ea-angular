import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsNavbarComponent } from './cards-navbar/cards-navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SquareCardsComponent } from './components/allCards/square-cards/square-cards.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterButtonComponent } from './footer-button/footer-button.component';
import { CardBottomComponent } from './card-bottom/card-bottom.component';
import { VerticalDrawerComponent } from './vertical-drawer/vertical-drawer.component';
import { CardTopComponent } from './card-top/card-top.component';
import { NavbarcardsComponent } from './components/allCards/navbarcards/navbarcards.component';
@NgModule({
  declarations: [
    AppComponent,
    CardsNavbarComponent,
    SideBarComponent,
    SquareCardsComponent,
    MenuBarComponent,
    FooterComponent,
    FooterButtonComponent,
    CardBottomComponent,
    VerticalDrawerComponent,
    CardTopComponent,
    NavbarcardsComponent
  ],
  imports: [
    BrowserModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
