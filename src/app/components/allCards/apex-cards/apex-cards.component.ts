import { Component, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { apexCards } from 'src/app/mockup/mockup-cards/apex-cards';

@Component({
  selector: 'app-apex-cards',
  templateUrl: './apex-cards.component.html',
  styleUrls: ['./apex-cards.component.css']
})
export class ApexCardsComponent implements OnInit {
  apexCards: NavBarCards[] = apexCards;
  constructor() { }

  ngOnInit(): void {
  }

}
