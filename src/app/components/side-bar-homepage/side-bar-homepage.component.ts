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


    }else{
      this.isOpen = true;
      this.onClickStyle = "slide-in-left";

     

    }
  }

  closeDiv(){
    if(this.isOpen){
      this.isOpen = false;
      this.onClickStyle = "slide-out-left"

    }else{
      this.isOpen = true;
      this.onClickStyle = "slide-in-left";

    }
  }
}
