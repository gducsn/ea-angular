import { Component, Input, OnInit } from '@angular/core';
import { NavBarCards } from 'src/app/interface/interface-cards/navbar-cards-interface';

@Component({
  selector: 'app-navbarcards',
  templateUrl: './navbarcards.component.html',
  styleUrls: ['./navbarcards.component.css']
})
export class NavbarcardsComponent implements OnInit {
  @Input()  data!: NavBarCards[];

  constructor() { }

  ngOnInit(): void {
  }

}
