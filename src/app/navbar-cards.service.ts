import { Injectable, OnInit } from '@angular/core';
import { NavBarCards } from './interface/interface-cards/navbar-cards-interface';
@Injectable({
  providedIn: 'root'
})
export class NavbarCardsService implements OnInit {
  private battleFieldCard: NavBarCards[] = [{
    extraClass: "defaultStyle",
    id: 0,
    imgUrl: 'assets/cardsIMG/01.jpeg',
    textEa: 'Battlefield 2042',
    textDate: '7-mar-2022',
    textTitle: 'AGGIORNAMENTO N° 3.3 DI BATTLEFIELD 2042',
    textMain: 'Ulteriori correzioni di errori, miglioramenti per l/esperienza di gioco e rinnovamento della tabella punti.'
  }, 
  { 
    extraClass: "defaultStyle",
    id: 2,
    imgUrl: 'assets/cardsIMG/02.png',
    textEa: 'Battlefield 2042',
    textDate: '3-mar-2022',
    textTitle: 'Feedback di Battlefield - Mappe',
    textMain: 'Le mappe di Battlefield 2042: feedback dei giocatori e aggiornamenti - Electronic Arts.'
  },
  {     extraClass: "defaultStyle",

    id: 3,
    imgUrl: '/assets/cardsIMG/03.jpg',
    textEa: 'Battlefield 2042',
    textDate: '1-feb-2022',
    textTitle: 'Briefing Battlefield - Il viaggio verso la Stagione 1',
    textMain: 'Un aggiornamento sul nostro impegno per Battlefield 2042.'
  },
  {     extraClass: "defaultStyle",

    id: 4,
    imgUrl: 'assets/cardsIMG/04.png',
    textEa: 'Battlefield 2042',
    textDate: '18-mar-2022',
    textTitle: 'AGGIORNAMENTO N° 3.2 DI BATTLEFIELD 2042',
    textMain: 'Sulla correzione di altri errori e miglioramenti al gioco.'
  },
  {     extraClass: "defaultStyle",

    id: 5,
    imgUrl: '/assets/cardsIMG/02.png',
    textEa: 'Battlefield 2042',
    textDate: '4-mar-2021',
    textTitle: 'AGGIORNAMENTO N° 3.1 DI BATTLEFIELD 2042',
    textMain: 'Miglioramenti al bilanciamento dei veicoli, modifiche per le armi e ulteriori correzioni di bug.'
  },
  {     extraClass: "defaultStyle",

    id: 6,
    imgUrl: 'assets/cardsIMG/02.png',
    textEa: 'Battlefield 2042',
    textDate: '2-mar-2022',
    textTitle: 'AGGIORNAMENTO N° 3 DI BATTLEFIELD 2042',
    textMain: 'Correzione di ulteriori errori, modifiche al bilanciamento e miglioramenti per l/esperienza di gioco'
  }
];
private apexCards: NavBarCards[] = [
  {     extraClass: "defaultStyle",

  id: 1,
  imgUrl: 'assets/cardsIMG/01.jpeg',
  textEa: 'Apex Legends',
  textDate: '24-mar-2022',
  textTitle: 'I playoff della Fase 2 Arrivano a Stoccolma',
  textMain: 'Le competizioni dal vivo ripartiranno da Stoccolma nei playoff della Fase 2, con un montepremi di 1.000.000$!'
},
{     extraClass: "defaultStyle",

  id: 2,
  imgUrl: 'assets/cardsIMG/02.png',
  textEa: 'Apex Legends',
  textDate: '23-mar-2022',
  textTitle: 'Controllo ritorna nell/evento collezione dei Guerrieri',
  textMain: 'Dal 29 marzo al 12 aprile gioca Controllo, prova la nuova mappa di Arene, sblocca il cimelio di Crypto e scopri cosa ha preparato Caustic!'
},
{     extraClass: "defaultStyle",

  id: 3,
  imgUrl: '/assets/cardsIMG/03.jpg',
  textEa: 'Apex Legends',
  textDate: '23-mar-2022',
  textTitle: 'Terzo anniversario: incontra la community di Apex legends',
  textMain: 'In occasione del 3º anniversario del gioco, abbiamo deciso di dare spazio ai creator e ai gruppi della community che ci hanno aiutato a crescere. Torna ogni settimana per l/intera durata della stagione per conoscere i nostri …'
},
{     extraClass: "defaultStyle",

  id: 4,
  imgUrl: 'assets/cardsIMG/04.png',
  textEa: 'Apex Legends',
  textDate: '16-mar-2022',
  textTitle: 'Lanciati nel caos con il nuovo bundle di Prime Gaming per Mad Maggie',
  textMain: 'Ottieni la skin Corallo del caos per Mad Maggie e altro ancora dal 17 marzo al 21 aprile. È gratis con il tuo abbonamento a Prime!'
},
{     extraClass: "defaultStyle",

  id: 5,
  imgUrl: '/assets/cardsIMG/02.png',
  textEa: 'Apex Legends',
  textDate: '1-mar-2021',
  textTitle: 'Diamo il via al lancio regionale limitato di Apex Legends™ Mobile',
  textMain: 'I giocatori dei 10 paesi selezionati possono entrare subito in gioco!'
},
{     extraClass: "defaultStyle",

  id: 6,
  imgUrl: 'assets/cardsIMG/02.png',
  textEa: 'Apex Legends',
  textDate: '23-feb-2021',
  textTitle: 'Apex Legends Mobile - Domande frequenti sul lancio regionale limitato',
  textMain: 'Scopri tutto quello che c/è da sapere prima dell/inizio del lancio regionale limitato.'
}
];

private eaPlayCards: NavBarCards[] = [
  {     extraClass: "",

  id: 1,
  imgUrl: 'assets/cardsIMG/01.jpeg',
  textEa: 'Electronic Arts Inc.',
  textDate: '14-mag-2021',
  textTitle: 'Gioca a Mass Effect Legendary Edition con Ea Play* Pro',
  textMain: 'Vivi la saga cinematografica ora rimasterizzata e ottimizzata per il 4K Ultra HD'
},
{     extraClass: "",

  id: 2,
  imgUrl: 'assets/cardsIMG/02.png',
  textEa: 'Electronic Arts Inc.',
  textDate: '3-mag-2021',
  textTitle: 'Ottieni di più da FIFA 21 con EA play - Sito ufficiale EA SPORTS',
  textMain: 'FIFA 21 è ora disponibile in The Play List con EA Play.'
},
{     extraClass: "",

  id: 3,
  imgUrl: '/assets/cardsIMG/03.jpg',
  textEa: 'Electronic Arts Inc.',
  textDate: '1-apr-2021',
  textTitle: 'In evidenza su EA Play - Aprile 2021',
  textMain: 'Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play.'
},
{     extraClass: "",

  id: 4,
  imgUrl: 'assets/cardsIMG/04.png',
  textEa: 'Electronic Arts Inc.',
  textDate: '18-mar-2021',
  textTitle: 'EA play è ora disponibile su Xbox Game Pass per PC tramite l/App EA Desktop',
  textMain: 'EA Desktop, la nostra piattaforma PC di nuova generazione, è in fase di open beta. Stiamo unendo le nostre forze con Xbox per offrire più giochi agli utenti PC.'
},
{     extraClass: "",

  id: 5,
  imgUrl: '/assets/cardsIMG/02.png',
  textEa: 'Electronic Arts Inc.',
  textDate: '1-mar-2021',
  textTitle: 'In evidenza su EA Play - Marzo 2021',
  textMain: 'Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Plat o EA Play Pro.'
},
{     extraClass: "",

  id: 6,
  imgUrl: 'assets/cardsIMG/02.png',
  textEa: 'Electronic Arts Inc.',
  textDate: '25-feb-2021',
  textTitle: 'EA Play - Prossimamente in The Play List - Primavera 2021',
  textMain: 'Scopri tutto sui nuovi giochi in arrivo su EA Play o EA Play Pro.'
}
];
private f1Cards: NavBarCards[] = [
  
    {     extraClass: "",

    id: 1,
    imgUrl: 'assets/cardsIMG/01.jpeg',
    textEa: 'F1 2021',
    textDate: '30-mar-2022',
    textTitle: 'F1 2021 - Pass Podio Serie 5',
    textMain: 'Sblocca oggetti gratuiti ispirati dai creatori Tiametmarduk e MaximeMXM nel livello gratuito del Pass Podio'
  },
  {     extraClass: "",

    id: 2,
    imgUrl: 'assets/cardsIMG/02.png',
    textEa: 'F1 2021',
    textDate: '24-mar-2022',
    textTitle: 'F1 2021 - F1 2021 su EA Play',
    textMain: 'Goditi le nuove straordinarie funzionalità di F1 2021'
  },
  {     extraClass: "",

    id: 3,
    imgUrl: '/assets/cardsIMG/03.jpg',
    textEa: 'F1 2021',
    textDate: '28-feb-2022',
    textTitle: 'F1 2021 - Note sulla patch 1.17',
    textMain: 'Scopri di più sull/ultima patch'
  },
  {     extraClass: "",

    id: 4,
    imgUrl: 'assets/cardsIMG/04.png',
    textEa: 'F1 2021',
    textDate: '21-feb-2022',
    textTitle: 'F1 2021 - Note sulla patch 1.16',
    textMain: 'Scopri di più sull/ultima patch'
  },
  {     extraClass: "",

    id: 5,
    imgUrl: '/assets/cardsIMG/02.png',
    textEa: 'F1 2021',
    textDate: '26-gen-2022',
    textTitle: 'F1 2021 - Pass Podio Serie 4',
    textMain: 'Sblocca oggetti ispirati dai creatori in questa serie del Pass Podio'
  },
  {     extraClass: "",

    id: 6,
    imgUrl: 'assets/cardsIMG/02.png',
    textEa: 'F1 2021',
    textDate: '24-gen-2022',
    textTitle: 'F1 2021 - Sotto i riflettori: patch 1.15',
    textMain: 'E/ il momento di puntare i riflettori su alcune delle altre novità e modifiche in arrivo oggi'
  }
  
];
private notizieCards: NavBarCards[] = [
  {     extraClass: "",

  id: 1,
  imgUrl: 'assets/cardsIMG/01.jpeg',
  textEa: 'Electronic Arts Inc.',
  textDate: '8-mar-2022',
  textTitle: 'Lavoriamo insieme per abbattere i pregiudizi. #BreaktheBias',
  textMain: 'La giornata internazinale della donan di quest\'anno affronta il tema dei pregiudizi consci e inconsci e di come questi rendano difficile alle donne progredire in molti ambiti della loro vita.'
},
{     extraClass: "",

  id: 2,
  imgUrl: 'assets/cardsIMG/02.png',
  textEa: 'Electronic Arts Inc.',
  textDate: '4-mar-2022',
  textTitle: 'Aggiornamento sui titoli Electronic Art in Russia e Bielorussia',
  textMain: 'Uniti in solidarietà con il popolo ucraino.'
},
{     extraClass: "",

  id: 3,
  imgUrl: '/assets/cardsIMG/03.jpg',
  textEa: 'Electronic Arts Inc.',
  textDate: '15-feb-2022',
  textTitle: 'In memoria di Coach John Madden',
  textMain: 'Il nostro caro amico John Madden è deceduto a fine dicembre. La sua scomparsa è stata una perdita enorme per la comunità del football americano, per l\'intero mondo dello sport e per tutti noi di Electronic Arts'
},
{     extraClass: "",

  id: 4,
  imgUrl: 'assets/cardsIMG/04.png',
  textEa: 'Electronic Arts Inc.',
  textDate: '25-gen-2022',
  textTitle: 'EA e Lucasfilm Games annunciano i nuovi titoli di Star Wars targati Respawn…',
  textMain: 'I prossimi titoli includono il futuro gioco della serie Star Wars Jedi, un nuovo FPS di Star Wars diretto da Peter Hirschmann e un gioco di strategia frutto della collaborazione tra Respawn e Bit Reactor'
},
{     extraClass: "",

  id: 5,
  imgUrl: '/assets/cardsIMG/02.png',
  textEa: 'Electronic Arts Inc.',
  textDate: '15-dic-2022',
  textTitle: 'I client di Origin ed EA Desktop non sono stati colpiti dalla vulnerabilità…',
  textMain: 'Alla fine della scorsa settimana è stata resa nota una vulnerabilità estremamente grave nella sicurezza della popolare libreria di registrazione basata su Java "Log4j 2" (CVE-2021-44228, alias "Log4Shell").'
},
{     extraClass: "",

  id: 6,
  imgUrl: 'assets/cardsIMG/02.png',
  textEa: 'Electronic Arts Inc.',
  textDate: '16-nov-2022',
  textTitle: 'Condividiamo il nostro Rapporto sull\'impatto del 2021',
  textMain: 'I nostri impegni e progressi nella diversità, la creazione di community più sane, la sostenibilità e molto altro.'
}
] 
private insideEaCards: NavBarCards[] = [
  
  {     extraClass: "",

    id: 1,
    imgUrl: 'assets/cardsIMG/01.jpeg',
    textEa: 'Inside EA',
    textDate: '1-apr-2022',
    textTitle: 'Vieni a costrutire il futuro di The Sims a Maxis',
    textMain: 'La nostra ambizione: ispirare tutti a creare un mondo migliore attraverso il gioco creativo'
  },
  {     extraClass: "",

    id: 2,
    imgUrl: 'assets/cardsIMG/02.png',
    textEa: 'Inside EA',
    textDate: '31-mar-2022',
    textTitle: 'Lasciare un segno positivo all/interno e all/esterno dei nostri giochi',
    textMain: 'Lasciare un segno positivo all/interno e all/esterno dei nostri giochi'
  },
  {     extraClass: "",

    id: 3,
    imgUrl: '/assets/cardsIMG/03.jpg',
    textEa: 'Inside EA',
    textDate: '13-gen-2022',
    textTitle: 'Firemonkeys Studio di EA festeggia i 10 anni di The Sims FreePlay',
    textMain: 'Tutto è cominciato realizzando The Sims per dispositivi mobili: da allora è diventato uno dei titoli preferiti della serie'
  },
  {     extraClass: "",

    id: 4,
    imgUrl: 'assets/cardsIMG/04.png',
    textEa: 'Inside EA',
    textDate: '16-dic-2021',
    textTitle: 'Dentro Full Circle - Melvin Teo, produttore di skate.',
    textMain: 'Scopri di più sullo studio Full Circle con Melvin Teo, produttore di skate.'
  },
  {     extraClass: "",

    id: 5,
    imgUrl: '/assets/cardsIMG/02.png',
    textEa: 'Inside EA',
    textDate: '2-nov-2021',
    textTitle: 'ABLE festeggia il mese nazionale di sensibilizzazione sull/occupazione per...',
    textMain: 'E/ il momento di educare sui problemi di handicap e celebrare i numerori e variegati contributi dei lavoratori con disabilità'
  },
  {     extraClass: "",

    id: 6,
    imgUrl: 'assets/cardsIMG/02.png',
    textEa: 'Inside EA',
    textDate: '27-ott-2021',
    textTitle: 'Rafforzare il nostro impegno in materia di accessibilità e inclusione.',
    textMain: 'Per ispirare il mondo a giocare, dobbiamo creare storie, personaggi, esperienze e servizi che entrino in risonanza con tutti i giocatori.'
  }
] 
private fifaCards: NavBarCards[] = [ {
  extraClass: "",

  id: 1,
  imgUrl: 'assets/cardsIMG/01.jpeg',
  textEa: 'FIFA',
  textDate: '29-mar-2022',
  textTitle: 'AGGIORNAMENTO PARTNERSHIP MARKETING EA SPORTS FIFA E AC MILAN - EA SPORTS',
  textMain: 'A partire dal 1 luglio 2022 terminerà la nostra partnership esclusiva con l’AC Milan. Questo non cambierà la vostra esperienza di gioco con EA SPORTS FIFA, poiché il nostro accordo di licenza con la squadra continua.'
},
{     extraClass: "",

  id: 2,
  imgUrl: 'assets/cardsIMG/02.png',
  textEa: 'FIFA',
  textDate: '24-mar-2022',
  textTitle: 'Divise club retrò in FUT 22 - Sito ufficiale EA SPORTS',
  textMain: 'Scopri le nuove divise retrò che puoi aggiungere ora al tuo club in FIFA 22 Ultimate Team.'
},
{     extraClass: "",

  id: 3,
  imgUrl: '/assets/cardsIMG/03.jpg',
  textEa: 'FIFA',
  textDate: '21-mar-2022',
  textTitle: 'Esperienza negozio Volta - FIFA 22 - Sito ufficiale EA SPORTS',
  textMain: 'A partire dalle 18:00 CET del 21 Marzo, il negozio VOLTA avrà un look nuovo e aggiornato.'
},
{     extraClass: "",

  id: 4,
  imgUrl: 'assets/cardsIMG/04.png',
  textEa: 'FIFA',
  textDate: '18-mar-2022',
  textTitle: 'Fanta FUT - FIFA 22 Ultimate Team - Sito ufficiale EA SPORTS',
  textMain: 'Scopri di più sulla FAnta FUT e dai un/occhiata alla rosa e alle sue valutazioni in FIFA 22 Ultimate Team.'
},
{     extraClass: "",

  id: 5,
  imgUrl: '/assets/cardsIMG/02.png',
  textEa: 'FIFA',
  textDate: '4-mar-2021',
  textTitle: 'FUT Birthday - FIFA 22 Ultimate Team - Sito ufficiale EA SPORTS',
  textMain: 'Scopri di più sul FUT Birthday e dai un/occhiata alla rosa e alle sue valutazioni in FIFA 22 Ultimate Team.'
},
{     extraClass: "",

  id: 6,
  imgUrl: 'assets/cardsIMG/02.png',
  textEa: 'FIFA',
  textDate: '2-mar-2022',
  textTitle: 'EA SPORTS - FIFA - Dichiarazione sulla situaizone in Ucraina',
  textMain: 'EA SPORTS esprime tutta la propria solidaritetà nei confronti del popolo ucraino e, come tante altre voci nel mondo del calcio, lancia un appello per il ritorno della pace e la fine dell/invasione dell/Ucraina'
}] 
  constructor() { }
  ngOnInit(): void {
  }
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
