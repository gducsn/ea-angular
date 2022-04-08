import { Component, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { f1Cards } from 'src/app/mockup/mockup-cards/f1-cards';

@Component({
  selector: 'app-f1-cards',
  templateUrl: './f1-cards.component.html',
  styleUrls: ['./f1-cards.component.css']
})
export class F1CardsComponent implements OnInit {

  f1Cards: NavBarCards[] = f1Cards;


  constructor() { }

  ngOnInit(): void {
  }

}
