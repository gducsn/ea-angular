import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsNavbarComponent } from './cards-navbar/cards-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
