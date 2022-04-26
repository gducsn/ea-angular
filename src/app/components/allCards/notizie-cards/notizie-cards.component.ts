import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { NavbarCardsService } from 'src/app/navbar-cards.service';
@Component({
  selector: 'app-notizie-cards',
  templateUrl: './notizie-cards.component.html',
  styleUrls: ['./notizie-cards.component.css']
})
export class NotizieCardsComponent implements OnInit {
  notizieData: NavBarCards[] = [];   
  notizie: NavBarCards[] = [];   
  @Input() notizieCardsIsOpen!: boolean;


  constructor(private dataService: NavbarCardsService) { }

  ngOnInit(): NavBarCards[] {
         this.notizie = this.dataService.getNotizieCards();   
         this.notizieData = this.notizie;   
      
      return this.notizieData;
       this.notizieData = this.dataService.updateCards(this.notizieData, 0, 5555, "siisis","siisis","siisis","siisis",);  
      
  }

  
  
  
}


