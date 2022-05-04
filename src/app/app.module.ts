import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SquareCardsComponent } from './components/allCards/square-cards/square-cards.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterButtonComponent } from './components/footer-button/footer-button.component';
import { CardBottomComponent } from './components/card-bottom/card-bottom.component';
import { VerticalDrawerComponent } from './components/vertical-drawer/vertical-drawer.component';
import { CardTopComponent } from './components/card-top/card-top.component';
import { NavbarcardsComponent } from './components/allCards/navbarcards/navbarcards.component';
import { CardsNavbarComponent } from './components/cards-navbar/cards-navbar.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SquareCardsComponent,
    MenuBarComponent,
    FooterComponent,
    FooterButtonComponent,
    CardBottomComponent,
    VerticalDrawerComponent,
    CardTopComponent,
    NavbarcardsComponent,
    CardsNavbarComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [Title],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
