import { Component, Input, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { NavbarCardsService } from 'src/app/navbar-cards.service';
@Component({
  selector: 'app-f1-cards',
  templateUrl: './f1-cards.component.html',
  styleUrls: ['./f1-cards.component.css']
})
export class F1CardsComponent implements OnInit {
  f1Data: NavBarCards[] = [];
  f1: NavBarCards[] = [];
  @Input() f1IsOpen!: boolean;



  constructor(private dataService: NavbarCardsService) { }

  ngOnInit(): NavBarCards[] {
     this.f1 = this.dataService.getf1Cards();
     this.f1Data = this.f1;
     return this.f1Data;
       this.f1Data = this.dataService.updateCards(this.f1Data, 3, 5555, "CIAO","siisis","siisis","siisis",);  


  }
  setCards4(){
    this.f1Data = this.f1;

  }

}
