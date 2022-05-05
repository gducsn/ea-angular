import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-drawer',
  templateUrl: './vertical-drawer.component.html',
  styleUrls: ['./vertical-drawer.component.css']
})
export class VerticalDrawerComponent implements OnInit {
toggleClass: boolean = false;
secondClass: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }
is(){
  this.toggleClass = !this.toggleClass;
  this.secondClass = false;
  if(this.toggleClass){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';
  }

}
two(){
  this.secondClass = !this.secondClass;
  this.toggleClass = false;
  if(this.secondClass){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';
  }
}

close(){
  this.toggleClass = false;
  this.secondClass = false;
}


}
