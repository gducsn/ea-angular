import { Component, OnInit } from '@angular/core';
import { NotizieCardsComponent } from '../components/allCards/notizie-cards/notizie-cards.component';
@Component({
  selector: 'app-cards-navbar',
  templateUrl: './cards-navbar.component.html',
  styleUrls: ['./cards-navbar.component.css']
})
export class CardsNavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
   removeDefaultBehaviour(event: any){
    event.preventDefault();

   }
}
