import { Injectable } from '@angular/core';
import { Urls } from '../interface/sidebar-urls';
@Injectable({
  providedIn: 'root'
})
export class SideBarUrlsService {

  private homepageSidebar: Urls[] = [
    {microCards: "assets/sidebarcardsimgs/fifaimg.jpg", microLogo: "/assets/sidebarcardsimgs/fifamicrologo.png"},
    {microCards: "assets/sidebarcardsimgs/maddenimg.jpg", microLogo: "/assets/sidebarcardsimgs/maddenmicrologo.png"},
    {microCards: "assets/sidebarcardsimgs/battlefieldimg.jpg", microLogo: "/assets/sidebarcardsimgs/battlemicrologo.png"},
    {microCards: "assets/sidebarcardsimgs/apeximg.jpg", microLogo: "/assets/sidebarcardsimgs/apexmicrologo.png"},
    {microCards: "assets/sidebarcardsimgs/thesimsimg.jpg", microLogo: "/assets/sidebarcardsimgs/thesimsmicrologo.png"},
    {microCards: "assets/sidebarcardsimgs/ittakesimg.png", microLogo: "/assets/sidebarcardsimgs/ittakesmicrologo.png"},

  ] 

  private starWarsSidebar: Urls[]= [
    {microCards: "assets/sidebarcardsimgs/sw1.jpg", microLogo: "/assets/sidebarcardsimgs/jedi-logo.png"},
    {microCards: "assets/sidebarcardsimgs/sw2.png", microLogo: "/assets/sidebarcardsimgs/battlefront2-logo.png"},
    {microCards: "assets/sidebarcardsimgs/sw3.jpg", microLogo: "/assets/sidebarcardsimgs/galaxy-logo.png"},
    {microCards: "assets/sidebarcardsimgs/sw4.jpg", microLogo: "/assets/sidebarcardsimgs/old-logo.png"},
  ]
  constructor() { }
  ngOnInit(): void {
  }
  gethomepageUrls(){
    return this.homepageSidebar;
  }
  getStarWarsUrls(){
    return this.starWarsSidebar;
  }
  showImgs(selectedObject: Urls[]){
    return selectedObject;
  }
}
