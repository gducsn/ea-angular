import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerticalDrawerService {
  
  constructor() { }


switchFirst: boolean = false;
switchSecond: boolean = false;

switchFirstObs = new BehaviorSubject<boolean>(this.switchFirst);
switchSecondObs = new BehaviorSubject<boolean>(this.switchSecond)



firstMenu(){
  this.switchFirst = !this.switchFirst;
  this.switchFirstObs.next(this.switchFirst)
  this.switchSecond = false;
  this.switchSecondObs.next(this.switchSecond)
  if(this.switchFirst){
    
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';

  }

}
secondMenu(){

  this.switchSecond = !this.switchSecond;
  this.switchSecondObs.next(this.switchSecond)
  this.switchFirst = false;
  this.switchFirstObs.next(this.switchFirst)
  
  if(this.switchSecond){
    document.body.style.overflow = 'hidden';
    document.body.scrollTop = 0;
  } else {
    document.body.style.overflow = 'scroll';
  }
}

closeMenu(){
  this.switchFirstObs.next(false)
  this.switchSecondObs.next(false)
  document.body.style.overflow = 'scroll';
}

returnFirst() {
  return this.switchFirstObs;
}
returnSecond() {
  return this.switchSecondObs;
}

  
}
