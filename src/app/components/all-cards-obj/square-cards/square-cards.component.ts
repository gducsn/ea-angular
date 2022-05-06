import { Component, OnInit } from '@angular/core';
import { SquareCards } from 'src/app/interface/interface-cards/square-cards-interface';
import { squareCards } from 'src/app/mockup/mockup-cards/square-cards';


@Component({
  selector: 'app-square-cards',
  templateUrl: './square-cards.component.html',
  styleUrls: ['./square-cards.component.css']
})
export class SquareCardsComponent implements OnInit {
  cardsSquare: SquareCards[] = squareCards;

  constructor() { }
 
  
 
  ngOnInit(): void {
  }

}
 