import { Component, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { notizieCards } from 'src/app/mockup/mockup-cards/notizie-cards';

@Component({
  selector: 'app-notizie-cards',
  templateUrl: './notizie-cards.component.html',
  styleUrls: ['./notizie-cards.component.css']
})
export class NotizieCardsComponent implements OnInit {
  notizieCards: NavBarCards[] = notizieCards
  constructor() { }

  ngOnInit(): void {
  }

}
