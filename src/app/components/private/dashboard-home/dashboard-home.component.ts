import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  cardContentProfile:any = {};
  cardContentServices: any = {};
  cardContentPassword: any = {};
  

  constructor() { }

  ngOnInit() {
    this.cardContentProfile = {
      title: "Public profile",
      content: "With supporting text below as a natural lead-in to additional content.",
      link: "/dashboard/profile"
    };
    this.cardContentServices = {
      title: "Services",
      content: "With supporting text below as a natural lead-in to additional content.",
      link: "/dashboard/services"
    };
    this.cardContentPassword = {
      title: "Change Password",
      content: "With supporting text below as a natural lead-in to additional content.",
      link: "/dashboard/password"
    };
  }

}
