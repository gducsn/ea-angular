import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
// servizi e metodi per aggiornare dinamicamente il nome della scheda browser
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {
}



ngOnInit() {
  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
    .subscribe(() => {
      const rt = this.getChild(this.activatedRoute)
      rt.data.subscribe((data:any) => {
        this.titleService.setTitle(data.title)})
    })
}

getChild(activatedRoute: ActivatedRoute): any {
  if (activatedRoute.firstChild) {
    return this.getChild(activatedRoute.firstChild);
  } else {
    return activatedRoute;
  }

}
}
