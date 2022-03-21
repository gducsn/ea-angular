import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-navbar',
  templateUrl: './cards-navbar.component.html',
  styleUrls: ['./cards-navbar.component.css']
})
export class CardsNavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
   btnStyle = "btn-default";
   btnStyle2 = "btn-default";
   btnStyle3 = "btn-default";
   btnStyle4 = "btn-default";
   btnStyle5 = "btn-default";
   btnStyle6 = "btn-default";
   btnStyle7 = "btn-default";
   btnStyle8 = "btn-default";

   submit(){
     if(this.btnStyle == "btn-change") {
       this.btnStyle ="btn-default";
     }else{
       this.btnStyle = "btn-change";
       this.btnStyle2 = "btn-default";  // questa operazione è per annullare l'evento quando premo
       this.btnStyle3 = "btn-default";  // su un altro bottone, senza questo codice, tutti i bottoni rimangono 
       this.btnStyle4 = "btn-default";  // con il bordo inferiore arancione
       this.btnStyle5 = "btn-default";
       this.btnStyle6 = "btn-default";
       this.btnStyle7 = "btn-default";
       this.btnStyle8 = "btn-default";


     }
   }
   submit2(){
     if(this.btnStyle2 === "btn-change") {
       this.btnStyle2 ="btn-default";
     }else{
       this.btnStyle2 = "btn-change";
       this.btnStyle = "btn-default";
       this.btnStyle3 = "btn-default";
       this.btnStyle4 = "btn-default";
       this.btnStyle5 = "btn-default";
       this.btnStyle6 = "btn-default";
       this.btnStyle7 = "btn-default";
       this.btnStyle8 = "btn-default";

     }
   }
   submit3(){
     if(this.btnStyle3 === "btn-change") {
       this.btnStyle3 ="btn-default";
     }else{
       this.btnStyle3 = "btn-change";
       this.btnStyle = "btn-default";
       this.btnStyle2 = "btn-default";
       this.btnStyle4 = "btn-default";
       this.btnStyle5 = "btn-default";
       this.btnStyle6 = "btn-default";
       this.btnStyle7 = "btn-default";
       this.btnStyle8 = "btn-default";
     }
   }
   submit4(){
     if(this.btnStyle4 === "btn-change") {
       this.btnStyle4 ="btn-default";
     }else{
       this.btnStyle4 = "btn-change";
       this.btnStyle = "btn-default";
       this.btnStyle3 = "btn-default";
       this.btnStyle2 = "btn-default";
       this.btnStyle5 = "btn-default";
       this.btnStyle6 = "btn-default";
       this.btnStyle7 = "btn-default";
       this.btnStyle8 = "btn-default";
     }
   }
   submit5(){
     if(this.btnStyle5 === "btn-change") {
       this.btnStyle5 ="btn-default";
     }else{
       this.btnStyle5 = "btn-change";
       this.btnStyle = "btn-default";
       this.btnStyle3 = "btn-default";
       this.btnStyle4 = "btn-default";
       this.btnStyle2 = "btn-default";
       this.btnStyle6 = "btn-default";
       this.btnStyle7 = "btn-default";
       this.btnStyle8 = "btn-default";
     }
   }
   submit6(){
     if(this.btnStyle6 === "btn-change") {
       this.btnStyle6 ="btn-default";
     }else{
       this.btnStyle6 = "btn-change";
       this.btnStyle = "btn-default";
       this.btnStyle3 = "btn-default";
       this.btnStyle4 = "btn-default";
       this.btnStyle5 = "btn-default";
       this.btnStyle2 = "btn-default";
       this.btnStyle7 = "btn-default";
       this.btnStyle8 = "btn-default";
     }
   }
   submit7(){
     if(this.btnStyle7 === "btn-change") {
       this.btnStyle7 ="btn-default";
     }else{
       this.btnStyle7 = "btn-change";
       this.btnStyle = "btn-default";
       this.btnStyle3 = "btn-default";
       this.btnStyle4 = "btn-default";
       this.btnStyle5 = "btn-default";
       this.btnStyle6 = "btn-default";
       this.btnStyle2 = "btn-default";
       this.btnStyle8 = "btn-default";
     }
   }
   submit8(){
     if(this.btnStyle8 === "btn-change") {
       this.btnStyle8 ="btn-default";
     }else{
       this.btnStyle8 = "btn-change";
       this.btnStyle = "bt-default";
       this.btnStyle3 = "btn-default";
       this.btnStyle4 = "btn-default";
       this.btnStyle5 = "btn-default";
       this.btnStyle6 = "btn-default";
       this.btnStyle7 = "btn-default";
       this.btnStyle2 = "btn-default";
     }
   }
}
