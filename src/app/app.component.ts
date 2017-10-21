import { Component, Renderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-freelance';

  constructor(private renderer: Renderer) {
  }
  onDeactivate() {
    document.body.scrollTop = 0;
  }
}



