import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsNavbarComponent } from './cards-navbar/cards-navbar.component';
import { CardsComponent } from './cards/cards.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SquareCardsComponent } from './square-cards/square-cards.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterButtonComponent } from './footer-button/footer-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsNavbarComponent,
    CardsComponent,
    SideBarComponent,
    SquareCardsComponent,
    MenuBarComponent,
    FooterComponent,
    FooterButtonComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
