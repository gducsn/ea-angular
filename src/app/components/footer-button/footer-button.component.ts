import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interface/interface-cards/country';

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

  languages: Country[] = [
    {name: "United States"},
    {name: "United Kingdom"},
    {name: "Australia"},
    {name: "France"},
    {name: "Deutschland"},
    {name: "Italia"},
    {name: "Polska"},
    {name: "Brasil"},
    

   
    {name: "Espana"},
    {name: "Ceska republika"},
    {name: "Ungheria"},
    {name: "Canada (En)"},
    {name: "Canada(Fr)"},
    {name: "Danmark"},
    {name: "Suomi"},
    {name: "Mexico"},
    {name: "Nederland"},

    {name: "Norge"},
    {name: "Sverige"},
  ]

  constructor() { 

  }

  ngOnInit(): void {
  }
  selectedCountry: any;
  isOpen: boolean = false;
  dynamicBtn = "";
  dynamicList = "";

  selectedLanguage: any;
  isOpen2: boolean = false;
  dynamicBtn2 = "";
  dynamicList2 = "";

  select(city: any){
    this.selectedCountry = city;
    
  }

  select2(language: any){
    this.selectedLanguage = language;
  }

  open(){
   if(this.isOpen === false){
     this.isOpen = true;
     this.isOpen2 = false;
     this.dynamicBtn = "btn2";
     this.dynamicList = "list2"

   }else{
     this.isOpen = false;
     this.isOpen2 = false;
     this.dynamicBtn = "btn";
   }
  }
   
  open2(){
    if(this.isOpen2 === false){
      this.isOpen2 = true;
      this.isOpen = false;
      this.dynamicBtn2 = "btn2";
     this.dynamicList2 = "list2"
 
    }else{
      this.isOpen2 = false;
      this.isOpen = false;
      this.dynamicBtn2 = "btn";
    }
   }
}
