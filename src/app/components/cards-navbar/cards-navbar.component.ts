import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
import { NavbarCardsService } from 'src/app/service/navbar-cards.service';
@Component({
  selector: 'app-cards-navbar',
  templateUrl: './cards-navbar.component.html',
  styleUrls: ['./cards-navbar.component.css']
})
export class CardsNavbarComponent implements OnInit {
  onOff: boolean = false;

  data: NavBarCards[] = [];

   returnApex: NavBarCards[] = [];  
   returnBattleField: NavBarCards[] = []; 
   returnFifa: NavBarCards[] = [];
   returnEa: NavBarCards[] = [];
   returnF1: NavBarCards[] = [];
   returnNotizie: NavBarCards[] = [];
   returnInside: NavBarCards[] = [];

   apexData: NavBarCards[] = [];
   battleFieldData: NavBarCards[] = [];
   fifaData: NavBarCards[] = [];
   eaData: NavBarCards[] = [];
   f1Data: NavBarCards[] = [];
   notizieData: NavBarCards[] = [];
   insideData: NavBarCards[] = [];

  constructor(private cardsService: NavbarCardsService) { }

  ngOnInit(): NavBarCards[]{
    this.returnApex = this.cardsService.getApexData();
    this.returnBattleField = this.cardsService.getBattleFieldData();
    this.battleFieldData = this.returnBattleField;
    this.apexData = this.returnApex;
    this.returnFifa = this.cardsService.getFifaData();
    this.fifaData = this.returnFifa;
    this.returnEa = this.cardsService.getEaData();
    this.eaData = this.returnEa;
    this.returnF1 = this.cardsService.getf1Data();
    this.f1Data = this.returnF1;
    this.returnInside = this.cardsService.getInsideData();
    this.insideData = this.returnInside;
    this.returnNotizie = this.cardsService.getNotizieData();
    this.notizieData = this.returnNotizie;
    this.showObj(this.notizieData,false)
    return this.battleFieldData && this.apexData && this.fifaData && this.f1Data && this.insideData && this.notizieData && this.eaData;
 }

 showObj(selectedObject: NavBarCards[] | any, value:boolean){
  this.data = this.cardsService.addData(selectedObject);
  this.cardsService.addData(selectedObject)
  if(value == false){
    this.onOff = false;
  } else this.onOff = true;
  
}



// change

arrowrightDisplay = false;
arrowDisplay = false;
  
@ViewChild('element') element!: ElementRef;
@ViewChild('button') button!: ElementRef;

scrollRight(){
  this.element.nativeElement.scrollTo({ left: (this.element.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  this.arrowrightDisplay = true;
  if (this.element.nativeElement.scrollLeft > 150) {
    this.arrowrightDisplay = true;
  }
} 

scrollLeft(): void {
  this.element.nativeElement.scrollTo({ left: (this.element.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  if(this.element.nativeElement.scrollLeft <= 150){
    this.arrowrightDisplay = false;
  }
  
}

/*checkButton() {
  if(this.button.nativeElement.className.length == 0){
    this.button.nativeElement.className = 'organgeBottom';
  }

}*/


 




}


 
   

