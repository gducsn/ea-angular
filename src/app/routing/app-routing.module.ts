
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { SigninFormComponent } from "../components/signin-form/signin-form.component";
import { HomeComponent } from "../home/home.component";



const routes: Routes = [
{ path: 'it-it', component: HomeComponent, data: {title: 'Home Page Electronic Arts - Sito Ufficiale'} },
{ path: '', redirectTo: '/it-it', pathMatch: 'full' },
{ path: 'signin', component: SigninFormComponent, data: {title: 'Crea Account'}  },
{path: '404', component: NotFoundComponent, data: {title: '404 - Official EA Site'}},
  {path: '**', redirectTo: '/404'},
  ];



  
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})





export class AppRoutingModule { }
