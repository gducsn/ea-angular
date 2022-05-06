import { Component, Input, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';
@Component({
  selector: 'app-navbarcards',
  templateUrl: './navbarcards.component.html',
  styleUrls: ['./navbarcards.component.css']
})
export class NavbarcardsComponent implements OnInit {
  @Input()  data!: NavBarCards[];
   
  onloading: boolean = false;
  constructor() { }

  ngOnInit(): boolean {
    
    this.onloading = true;
    return this.onloading = true;
  }
 
}
