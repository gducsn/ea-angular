import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SquareCardsComponent } from './components/all-cards-obj/square-cards/square-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterButtonComponent } from './components/footer-button/footer-button.component';
import { CardBottomComponent } from './components/card-bottom/card-bottom.component';
import { VerticalDrawerComponent } from './components/vertical-drawer/vertical-drawer.component';
import { CardTopComponent } from './components/card-top/card-top.component';
import { NavbarcardsComponent } from './components/all-cards-obj/navbarcards/navbarcards.component';
import { CardsNavbarComponent } from './components/cards-navbar/cards-navbar.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './components/main-menu-navbar/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SquareCardsComponent,
    FooterComponent,
    FooterButtonComponent,
    CardBottomComponent,
    VerticalDrawerComponent,
    CardTopComponent,
    NavbarcardsComponent,
    CardsNavbarComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent,
    SigninFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  
  ],
  providers: [Title],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
