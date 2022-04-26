import { Component, Input, OnInit } from '@angular/core';
import { NavBarCards } from '../interface/interface-cards/navbar-cards-interface';
import { NavbarCardsService } from '../navbar-cards.service';
@Component({
  selector: 'app-cards-navbar',
  templateUrl: './cards-navbar.component.html',
  styleUrls: ['./cards-navbar.component.css']
})
export class CardsNavbarComponent implements OnInit {
   notizieCardsIsOpen = false;
  apexCardsIsOpen = false;
  battleFieldCardsIsOpen = false;
  eaPlayCardsIsOpen = false;
  fifaCardsIsOpen = false;
  insideIsOpen = false;
  f1IsOpen = false;

 
  constructor() { }

  ngOnInit(): void{
   
 }

 openNotizie(event: any){
   event.preventDefault();
  

   if(this.notizieCardsIsOpen === false){
    this.notizieCardsIsOpen  = true;
    this.apexCardsIsOpen = false;
    this.battleFieldCardsIsOpen = false;
    this.eaPlayCardsIsOpen = false;
    this.fifaCardsIsOpen = false;
    this.insideIsOpen = false;
    this.f1IsOpen = false;





   }else{
    this.notizieCardsIsOpen = false;
    this.apexCardsIsOpen = false;
    this.battleFieldCardsIsOpen = false;
    this.eaPlayCardsIsOpen = false;
    this.fifaCardsIsOpen = false;
    this.insideIsOpen = false;
    this.f1IsOpen = false;





   } 
  }
   openApex(event: any){
    event.preventDefault()

    if(this.apexCardsIsOpen === false){
     this.apexCardsIsOpen  = true;
     this.notizieCardsIsOpen = false;
     this.battleFieldCardsIsOpen = false;
     this.eaPlayCardsIsOpen = false;
     this.fifaCardsIsOpen = false;
     this.insideIsOpen = false;
     this.f1IsOpen = false;







    }else{
     this.apexCardsIsOpen = false;
     this.notizieCardsIsOpen = false;
     this.battleFieldCardsIsOpen = false;
     this.eaPlayCardsIsOpen = false;
     this.fifaCardsIsOpen = false;
     this.insideIsOpen = false;
     this.f1IsOpen = false;





    }
  
 }
 openBattleField(event: any){
  event.preventDefault()

  if(this.battleFieldCardsIsOpen === false){
   this.battleFieldCardsIsOpen  = true;
   this.notizieCardsIsOpen = false;
   this.apexCardsIsOpen = false;
   this.eaPlayCardsIsOpen = false;
   this.fifaCardsIsOpen = false;
   this.insideIsOpen = false;
   this.f1IsOpen = false;




  }else{
   this.battleFieldCardsIsOpen = false;
   this.notizieCardsIsOpen = false;
   this.apexCardsIsOpen = false;
   this.eaPlayCardsIsOpen = false;
   this.fifaCardsIsOpen = false;
   this.insideIsOpen = false;
   this.f1IsOpen = false;




  }

}

openEaPlay(event: any){
  event.preventDefault()

  if(this.eaPlayCardsIsOpen === false){
   this.eaPlayCardsIsOpen  = true;
   this.notizieCardsIsOpen = false;
   this.apexCardsIsOpen = false;
   this.battleFieldCardsIsOpen = false;
   this.fifaCardsIsOpen = false;
   this.insideIsOpen = false;
   this.f1IsOpen = false;




  }else{
   this.eaPlayCardsIsOpen = false;
   this.notizieCardsIsOpen = false;
   this.apexCardsIsOpen = false;
   this.battleFieldCardsIsOpen = false;
   this.fifaCardsIsOpen = false;
   this.insideIsOpen = false;
   this.f1IsOpen = false;




  }
}
  openFifa(event: any){
    event.preventDefault()
  
    if(this.fifaCardsIsOpen === false){
     this.fifaCardsIsOpen  = true;
     this.notizieCardsIsOpen = false;
     this.apexCardsIsOpen = false;
     this.battleFieldCardsIsOpen = false;
     this.eaPlayCardsIsOpen = false;
     this.insideIsOpen = false;
     this.f1IsOpen = false;

  
    }else{
     this.fifaCardsIsOpen = false;
     this.notizieCardsIsOpen = false;
     this.apexCardsIsOpen = false;
     this.battleFieldCardsIsOpen = false;
     this.eaPlayCardsIsOpen = false;
     this.insideIsOpen = false;
     this.f1IsOpen = false;


  
    }
}
 
openInside(event: any){
  event.preventDefault()

  if(this.insideIsOpen === false){
   this.insideIsOpen  = true;
   this.notizieCardsIsOpen = false;
   this.apexCardsIsOpen = false;
   this.battleFieldCardsIsOpen = false;
   this.eaPlayCardsIsOpen = false
   this.fifaCardsIsOpen = false;
   this.f1IsOpen = false;


  }else{
   this.insideIsOpen = false;
   this.notizieCardsIsOpen = false;
   this.apexCardsIsOpen = false;
   this.battleFieldCardsIsOpen = false;
   this.eaPlayCardsIsOpen = false;
   this.fifaCardsIsOpen = false;
   this.f1IsOpen = false;



  }
}
  
openF1(event: any){
  event.preventDefault()

  if(this.f1IsOpen === false){
    this.f1IsOpen = true;
   this.insideIsOpen  = false;
   this.notizieCardsIsOpen = false;
   this.apexCardsIsOpen = false;
   this.battleFieldCardsIsOpen = false;
   this.eaPlayCardsIsOpen = false
   this.fifaCardsIsOpen = false;

  }else{
   this.insideIsOpen = false;
   this.f1IsOpen = false;
   this.notizieCardsIsOpen = false;
   this.apexCardsIsOpen = false;
   this.battleFieldCardsIsOpen = false;
   this.eaPlayCardsIsOpen = false;
   this.fifaCardsIsOpen = false;


  }
}
 
 
}


 
   

