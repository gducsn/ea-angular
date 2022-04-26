import { Component, Input, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { NavbarCardsService } from 'src/app/navbar-cards.service';
@Component({
  selector: 'app-eaplay-cards',
  templateUrl: './eaplay-cards.component.html',
  styleUrls: ['./eaplay-cards.component.css']
})
export class EaplayCardsComponent implements OnInit {
  eaPlayData : NavBarCards[] = [];
  eaPlay: NavBarCards[] = [];
  @Input() eaPlayCardsIsOpen!: boolean;


  constructor(private dataService: NavbarCardsService) { }

  ngOnInit(): NavBarCards[] {
     this.eaPlay = this.dataService.getEaPlayCards();
    return this.eaPlayData = this.eaPlay;
    this.eaPlayData = this.dataService.updateCards(this.eaPlayData, 3, 5555, "CIAO","siisis","siisis","siisis",);   

  }
 

}
