import { Component, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { eaPlayCards } from 'src/app/mockup/mockup-cards/eaplay-cards';

@Component({
  selector: 'app-eaplay-cards',
  templateUrl: './eaplay-cards.component.html',
  styleUrls: ['./eaplay-cards.component.css']
})
export class EaplayCardsComponent implements OnInit {
  eaPlayCards: NavBarCards[] = eaPlayCards

  constructor() { }

  ngOnInit(): void {
  }

}
