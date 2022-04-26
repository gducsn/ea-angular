import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interface/interface-cards/city';


@Component({
  selector: 'app-footer-button',
  templateUrl: './footer-button.component.html',
  styleUrls: ['./footer-button.component.css']
})
export class FooterButtonComponent implements OnInit {
  country: Country[] = [
    {name: "Austria"},
    {name: "Belgio"},
    {name: "Bulgaria"},
    {name: "Croazia"},
    {name: "Cipro"},
    {name: "Repubblica Ceca"},
    {name: "Danimarca"},
    {name: "Estonia"},
    {name: "Finlandia"},

    {name: "Francia"},
    {name: "Germania"},
    {name: "Grecia"},
    {name: "Ungheria"},
    {name: "Islanda"},
    {name: "Irlanda"},
    {name: "Italia"},
    {name: "Lettonia"},
    {name: "Liechtenstein"},

    {name: "Lituana"},
    {name: "Lussemburgo"},
    {name: "Malta"},
    {name: "Paesi Bassi"},
    {name: "Norvegia"},
    {name: "Polonia"},
    {name: "Portogallo"},
    {name: "Romania"},
    {name: "Slovenia"},

    {name: "Spagna"},
    {name: "Svezia"},
    {name: "Svizzera"},



  ]
  constructor() { 

  }

  ngOnInit(): void {
  }
  selectedCountry: any;
  isOpen: boolean = false;
  dynamicBtn = "";
  dynamicList = "";

  select(city: any){
    this.selectedCountry = city;
    
  }

  

  open(){
   if(this.isOpen === false){
     this.isOpen = true;
     this.dynamicBtn = "btn2";
     this.dynamicList = "list2"

   }else{
     this.isOpen = false;
     this.dynamicBtn = "btn";
   }
  }


}
