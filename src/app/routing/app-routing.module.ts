
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";



const routes: Routes = [
{ path: 'it-it', component: AppComponent },
{ path: '', redirectTo: '/it-it', pathMatch: 'full' } ];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
