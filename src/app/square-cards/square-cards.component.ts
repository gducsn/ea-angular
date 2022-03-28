import { Component, OnInit } from '@angular/core';

import { Cards, cardsObj } from './obj-template-square-cards';

@Component({
  selector: 'app-square-cards',
  templateUrl: './square-cards.component.html',
  styleUrls: ['./square-cards.component.css']
})
export class SquareCardsComponent implements OnInit {
  cardsSquare: Cards[] = cardsObj;

  constructor() { }
 
  
 
  ngOnInit(): void {
  }

}
