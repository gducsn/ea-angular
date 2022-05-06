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
}
