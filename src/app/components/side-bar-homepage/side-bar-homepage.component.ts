import { Component, OnInit } from '@angular/core';
import { Urls } from 'src/app/interface/sidebar-urls';
import { SideBarUrlsService } from 'src/app/service/side-bar-urls.service';
@Component({
  selector: 'app-side-bar-homepage',
  templateUrl: './side-bar-homepage.component.html',
  styleUrls: ['./side-bar-homepage.component.css']
})
export class SideBarHomepageComponent implements OnInit {
  onClickStyle: string = "slide-out-left";
  isOpen: boolean = false;
  urlsData: Urls[] = [];

  returnUrls: Urls[] = [];
  urls: Urls[] = [];


  //RESPONSIVE
  firstSubIsOpen: boolean = false;
  firstSubListIsOpen: boolean = false;
  secondSubListIsOpen: boolean = false;
  thirdListIsOpen: boolean = false;

  fourthListIsOpen: boolean = false;
  fifthListIsOpen: boolean = false;
  sixthListIsOpen: boolean = false;

  sideIsOpen: boolean = false;

  constructor(private homepageSidebar: SideBarUrlsService) { }

  ngOnInit(): Urls[] {
    this.returnUrls = this.homepageSidebar.gethomepageUrls();
    this.urls = this.returnUrls;
    return this.urls;
  }
  showImg(homePageUrls: Urls[]){
    this.urls = this.homepageSidebar.showImgs(homePageUrls);  // variabile da usare nel template
    console.log(this.urls)
  }


  openDiv(){
    if(this.isOpen){
      this.isOpen = false;
      this.onClickStyle = "slide-out-left";
      document.body.style.overflow = 'scroll';


    }else{
      this.isOpen = true;
      this.onClickStyle = "slide-in-left";
      document.body.style.overflow = 'hidden';

     

    }
  }

  closeDiv(){
    if(this.isOpen){
      this.isOpen = false;
      this.onClickStyle = "slide-out-left";
      document.body.style.overflow = 'scroll';

    }else{
      this.isOpen = true;
      this.onClickStyle = "slide-in-left";
      document.body.style.overflow = 'hidden';

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
    }
    else{
      this.sideIsOpen = false;
    }
  }
}
