import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-button',
  templateUrl: './footer-button.component.html',
  styleUrls: ['./footer-button.component.css']
})
export class FooterButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOpen = false; 
  style = "x"
  btn1(){
    if(this.isOpen === false){
      this.isOpen = true;
      this.style = "change"
    }else{
      this.isOpen = false;
      this.style = "x";
    }
  }
}
