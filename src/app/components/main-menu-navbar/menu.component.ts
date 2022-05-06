import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  onOff:boolean = false;
  scrolled: boolean = false;
  
  gamesOne: Array<string> = ['Ultimi giochi', 'prossimamente', 'EA Sports', 'Giochi gratuiti', 'Libreria dei giochi'];
  gamesTwo: Array<string> = ['PC', 'Playstation 5', 'Xbox Series X', 'Nintendo Switch', 'Cellulari'];
  altreEsperienze: Array<string> = ['EA Play', 'Origin','Competizioni videoludiche', 'Diretta di EA Play'];
  informazioni: Array<string> = ['Società', 'EA Studi','Lavora con noi', 'La nostra tecnologia', 'EA Partners', 'Notizie', 'Inside EA'];
  impegni: Array<string> = ['Gioco positivo','Diversità e inclusione', 'Investire nella comunità', 'Persona e cultura', 'Ambiente'];
  risorse: Array<string> = ['Aiuto','Forum', 'Filtro famiglia', 'Accesibilità', 'Stanpa', 'Investitori', 'Testi di gioco'];
  arrayOfIMG: Array<string> = ['assets/sidebarcardsimgs/fifaimg.jpg', 'assets/sidebarcardsimgs/maddenimg.jpg','assets/sidebarcardsimgs/battlefieldimg.jpg','assets/sidebarcardsimgs/apeximg.jpg','assets/sidebarcardsimgs/thesimsimg.jpg','/assets/sidebarcardsimgs/ittakesimg.png']
  arrayOfIMGAbsolute: Array<string> = ['assets/sidebarcardsimgs/fifamicrologo.png', 'assets/sidebarcardsimgs/maddenmicrologo.png','assets/sidebarcardsimgs/battlemicrologo.png','assets/sidebarcardsimgs/apexmicrologo.png','assets/sidebarcardsimgs/thesimsimgmicrologo.png','/assets/sidebarcardsimgs/ittakesmicrologo.png']


// Aggiungo metodo che permette di blocare il menu raggiunta una certa soglia di scroll.







  //RESPONSIVE
  firstSubIsOpen: boolean = false;
  firstSubListIsOpen: boolean = false;
  secondSubListIsOpen: boolean = false;
  thirdListIsOpen: boolean = false;

  fourthListIsOpen: boolean = false;
  fifthListIsOpen: boolean = false;
  sixthListIsOpen: boolean = false;

  sideIsOpen: boolean = false;
  anim: string = "";

  constructor() { }



    @HostListener("window:scroll", [])
    onWindowScroll() {
        if(window.scrollY > 40){
          this.scrolled = true;
        } else if(window.scrollY < 40) {
          this.scrolled = false;
        }
    }

  ngOnInit(): void {
  }

  change() {
    if(this.onOff == false){
      this.onOff = true;
      document.body.style.overflow = 'hidden';
    } else {
      this.onOff = false;
      document.body.style.overflow = 'scroll';
    }
  }


  //RESPONSIVE

  openSubSection(){
    if(!this.firstSubIsOpen){
      this.firstSubIsOpen = true;
    }else{
      this.firstSubIsOpen = false;
    }
  }

  openFirstSubList(){
    if(!this.firstSubListIsOpen){
      this.firstSubListIsOpen = true;
    }else{
      this.firstSubListIsOpen = false;
    }
  }

  openSecondSubList(){
    if(!this.secondSubListIsOpen){
      this.secondSubListIsOpen = true;
    }else{
      this.secondSubListIsOpen = false;
    }
  }
  

  openThirdList(){
    if(!this.thirdListIsOpen){
      this.thirdListIsOpen = true;
    }else{
      this.thirdListIsOpen = false;
    }
  }
  
  openFourthList(){
    if(!this.fourthListIsOpen){
      this.fourthListIsOpen = true;
    }else{
      this.fourthListIsOpen = false;
    }
  }

  openFifthList(){
    if(!this.fifthListIsOpen){
      this.fifthListIsOpen = true;
    }else{
      this.fifthListIsOpen = false;
    }
  }

  openSixthList(){
    if(!this.sixthListIsOpen){
      this.sixthListIsOpen = true;
    }else{
      this.sixthListIsOpen = false;
    }
  }



  openSideBar(){
    if(!this.sideIsOpen){
      this.sideIsOpen = true;
      this.anim = "slide-in-left"
    }
    else{
      this.sideIsOpen = false;
    }
  }
}
