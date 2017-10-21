import { Component, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private renderer: Renderer) { }

  ngOnInit() {
    
}

onDeactivate() {
  document.body.scrollTop = 0;
}
}

