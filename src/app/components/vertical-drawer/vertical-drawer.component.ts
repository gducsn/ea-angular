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

}
two(){
  this.secondClass = !this.secondClass;
  this.toggleClass = false;
}

close(){
  console.log('test')
}


}
