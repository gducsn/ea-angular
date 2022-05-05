import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isHover1: boolean = false;
  isHover2: boolean = false;
  isHover3:boolean = false;
  isHover4 = false;
  isHover5 = false;




  animation1: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  isOpen1(){
    if(this.isHover1){
      this.isHover1 = false;
      this.isHover3 = false
      this.isHover2 = false;

    }else{
      this.isHover1 = true;
      this.isHover2 = false;
      this.isHover3 = false;
      this.isHover5 = false;


      this.animation1 = "scale-in-ver-top"
    }
  }
  isOpen2(){
    if(this.isHover2){
      this.isHover2 = false;
      this.isHover1 = false;
      this.isHover3 = false;
      this.isHover4 = false;
      this.isHover5 = false;



    }else{
      this.isHover2 = true;
      this.isHover1 = false;
      this.isHover3 = false;
      this.isHover4 = false;
      this.isHover5 = false;



      this.animation1 = "scale-in-ver-top"

    }
  }

  isOpen3(){
    if(this.isHover3){
      this.isHover3 = false
      this.isHover2 = false;
      this.isHover1 = false;
      this.isHover4 = false;
      this.isHover5 = false;


    }else{
      this.isHover3 = true

      this.isHover2 = false;
      this.isHover1 = false;
      this.isHover4 = false;
      this.isHover5 = false;


      this.animation1 = "scale-in-ver-top"

    }
  }
  isOpen4(){
    if(this.isHover4){
      this.isHover4 = false
      this.isHover3 = false
      this.isHover2 = false;
      this.isHover1 = false;
      this.isHover5 = false;

    }else{
      this.isHover3 = false
      this.isHover4 = true;

      this.isHover2 = false;
      this.isHover1 = false;
      this.isHover5 = false;

      this.animation1 = "scale-in-ver-top"

    }
  }

  isOpen5(){
    if(this.isHover5){

      this.isHover4 = false
      this.isHover3 = false
      this.isHover2 = false;
      this.isHover1 = false;
      this.isHover5 = false;

    }else{
      this.isHover3 = false
      this.isHover4 = false;

      this.isHover2 = false;
      this.isHover1 = false;
      this.isHover5 = true;

      this.animation1 = "scale-in-ver-top"

    }
  }
}
