import { Component, OnInit } from '@angular/core';
import { SigninFormService } from 'src/app/service/signin-form.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  // il servizio che gesisce tutto :

  constructor(private formCreate: SigninFormService) { }

  onSubmit() {
    return this.formCreate.onSubmit();
  }
 
contactForm = this.formCreate.contactForm

countries = this.formCreate.countries;
giorno =this.formCreate.giorno;
mese = this.formCreate.mese;
anno = this.formCreate.anno;


  ngOnInit(): void {
  }

}
