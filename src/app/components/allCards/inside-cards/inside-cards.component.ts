import { Component, Input, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { NavbarCardsService } from 'src/app/navbar-cards.service';
@Component({
  selector: 'app-inside-cards',
  templateUrl: './inside-cards.component.html',
  styleUrls: ['./inside-cards.component.css']
})
export class InsideCardsComponent implements OnInit {
  insideEaData: NavBarCards[] = [];
  insideEa: NavBarCards[] = [];
  @Input() insideIsOpen!: boolean;

  constructor(private dataService: NavbarCardsService) {

   }

  ngOnInit(): NavBarCards[] {
         this.insideEa = this.dataService.getInsideEaCards();
         this.insideEaData = this.insideEa;
         return this.insideEaData;
        this.insideEaData = this.dataService.updateCards(this.insideEaData, 3, 5555, "CIAO","siisis","siisis","siisis",);  


  }

}
