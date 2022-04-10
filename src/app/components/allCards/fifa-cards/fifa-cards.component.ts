import { Component, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { fifaCards } from 'src/app/mockup/mockup-cards/fifa-cards';

@Component({
  selector: 'app-fifa-cards',
  templateUrl: './fifa-cards.component.html',
  styleUrls: ['./fifa-cards.component.css']
})
export class FifaCardsComponent implements OnInit {
  fifaCards: NavBarCards[]= fifaCards;
  constructor() { }

  ngOnInit(): void {
  }

}
