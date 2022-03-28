import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsNavbarComponent } from './cards-navbar/cards-navbar.component';
import { CardsComponent } from './cards/cards.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SquareCardsComponent } from './square-cards/square-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsNavbarComponent,
    CardsComponent,
    SideBarComponent,
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
