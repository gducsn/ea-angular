import { Component, Input, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { NavbarCardsService } from 'src/app/navbar-cards.service';
@Component({
  selector: 'app-fifa-cards',
  templateUrl: './fifa-cards.component.html',
  styleUrls: ['./fifa-cards.component.css']
})
export class FifaCardsComponent implements OnInit {
  fifaData:  NavBarCards[] = [];
  fifa: NavBarCards[] = [];
  @Input() fifaCardsIsOpen!: boolean;


  constructor(private dataService: NavbarCardsService) { }

  ngOnInit(): NavBarCards[] {
     this.fifa = this.dataService.getFifaCards();
    return this.fifaData = this.fifa;
    this.fifaData = this.dataService.updateCards(this.fifaData, 3, 5555, "CIAO","siisis","siisis","siisis",);  



  }

}
