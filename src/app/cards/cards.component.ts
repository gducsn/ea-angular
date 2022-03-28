import { Component, OnInit } from '@angular/core';
import { cardObj } from './obj-template-cards';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

 cardObj = cardObj;
  
 constructor() { }
   
  ngOnInit(): void {
  }

}
