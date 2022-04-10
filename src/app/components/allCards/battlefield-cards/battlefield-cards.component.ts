import { Component, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { battlefieldCards } from 'src/app/mockup/mockup-cards/battelefield-cards';

@Component({
  selector: 'app-battlefield-cards',
  templateUrl: './battlefield-cards.component.html',
  styleUrls: ['./battlefield-cards.component.css']
})
export class BattlefieldCardsComponent implements OnInit {

  battlefieldCards: NavBarCards[] = battlefieldCards;


  constructor() { }

  ngOnInit(): void {
  }

}
