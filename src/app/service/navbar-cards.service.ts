import { Injectable } from '@angular/core';
import { NavBarCards } from '../interface/interface-cards/navbar-cards-interface';
import { apexCards, battleFieldCard, eaPlayCards, f1Cards, fifaCards, insideEaCards, notizieCards } from '../mockup/mockup-cards/obj-cards';
@Injectable({
  providedIn: 'root'
})
export class NavbarCardsService {

  
private battleFieldCard: NavBarCards[] = battleFieldCard;
private apexCards: NavBarCards[] = apexCards;
private eaPlayCards: NavBarCards[] = eaPlayCards;
private f1Cards: NavBarCards[] = f1Cards;
private notizieCards: NavBarCards[] = notizieCards; 
private insideEaCards: NavBarCards[] = insideEaCards;
private fifaCards: NavBarCards[] = fifaCards;



  constructor() { }
  getBattleFieldData(){
    return this.battleFieldCard;
  }
  getApexData(){
    return this.apexCards;
  }
  getEaData(){
    return this.eaPlayCards;
  }
  getf1Data(){
    return this.f1Cards;
  }
  getNotizieData(){
    return this.notizieCards;
  }
  getInsideData(){
    return this.insideEaCards
  }
  getFifaData(){
    return this.fifaCards;
  }

  addData(selectedObject: NavBarCards[]){
    return selectedObject;
  }
       

}
