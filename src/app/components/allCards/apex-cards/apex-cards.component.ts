import { Component, Input, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { NavbarCardsService } from 'src/app/navbar-cards.service';
@Component({
  selector: 'app-apex-cards',
  templateUrl: './apex-cards.component.html',
  styleUrls: ['./apex-cards.component.css']
})
export class ApexCardsComponent implements OnInit {
  apexData: NavBarCards[] = [];
  apex: NavBarCards[] = [];
  @Input() apexCardsIsOpen!: boolean;

  constructor(private dataService: NavbarCardsService) { }

  ngOnInit(): NavBarCards[] {
    this.apex = this.dataService.getApexCards();  
    this.apexData = this.apex;   

   this.apexData;
  return this.apexData = this.dataService.updateCards(this.apexData, 0, 5555, "CIAO","siisis","siisis","siisis",);  

}



}
