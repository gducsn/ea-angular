import { Component, OnInit } from '@angular/core';
import { VerticalDrawerService } from 'src/app/service/vertical-drawer.service';

@Component({
  selector: 'app-vertical-drawer',
  templateUrl: './vertical-drawer.component.html',
  styleUrls: ['./vertical-drawer.component.css']
})
export class VerticalDrawerComponent implements OnInit {
  constructor(private vertical: VerticalDrawerService) { }


firstClassSwitch!:boolean;
secondClassSwitch!:boolean;

firstMenu(){
  return this.vertical.firstMenu();

}
secondMenu(){
  return this.vertical.secondMenu()
}

closeMenu(){
  return this.vertical.closeMenu()
}


ngOnInit() {
  this.vertical.returnFirst().subscribe(x => this.firstClassSwitch = x)
  this.vertical.returnSecond().subscribe(x => this.secondClassSwitch = x)
}

}
