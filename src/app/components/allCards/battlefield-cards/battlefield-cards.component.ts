import { Component, Input, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { NavbarCardsService } from 'src/app/navbar-cards.service';

@Component({
  selector: 'app-battlefield-cards',
  templateUrl: './battlefield-cards.component.html',
  styleUrls: ['./battlefield-cards.component.css']
})
export class BattlefieldCardsComponent implements OnInit {
  battleFieldData: NavBarCards[] = [];
  battleField: NavBarCards[] = [];
  @Input() battleFieldCardsIsOpen!: boolean;

  


  constructor(private dataService: NavbarCardsService) { }

  ngOnInit(): NavBarCards[] {
    this.battleField = this.dataService.getBattleFieldCards();
    this.battleFieldData = this.battleField;
    return this.battleFieldData;
    this.battleFieldData = this.dataService.updateCards(this.battleFieldData, 3, 5555, "CIAO","siisis","siisis","siisis",);  

  }

 

}
