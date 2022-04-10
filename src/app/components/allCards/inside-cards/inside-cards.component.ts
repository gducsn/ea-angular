import { Component, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { insideCards } from 'src/app/mockup/mockup-cards/inside-cards';

@Component({
  selector: 'app-inside-cards',
  templateUrl: './inside-cards.component.html',
  styleUrls: ['./inside-cards.component.css']
})
export class InsideCardsComponent implements OnInit {

  insideCards: NavBarCards[] = insideCards;
  constructor() { }

  ngOnInit(): void {
  }

}
