import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-freelance';

  constructor(private router: Router) {

    this.router.events.subscribe(() => {
      window.scroll(0, 0);
    });
  }
  
}



