import { Component, OnInit } from '@angular/core';
import { FreelancePublicService } from '../../services/freelance-public.service'
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  url = `${environment.baseURL}`;  
  publicUserId:any;
  user :any = {
  };
  serviceId: any;
  services: any = [];
  sections: any = [];


  constructor(private freelancePublic: FreelancePublicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.publicUserId = params['id'];
      });
    
    this.freelancePublic.getUserProfile(this.publicUserId)
    .subscribe((user) => {
      this.user = user;
    })
    this.freelancePublic.getServiceProfile(this.publicUserId)
    .subscribe((service) => {
      this.services = service;
      console.log(this.services)
      
    });



    this.freelancePublic.getPublicSection(this.publicUserId)
    .subscribe((section) => {
      this.sections = section;
      console.log(this.sections);
    });

  }

}
