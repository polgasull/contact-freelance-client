import { Component, OnInit } from '@angular/core';
import { FreelancePublicService } from '../../services/freelance-public.service'
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HelpersService } from '../../services/helpers.service';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css'],
  
})
export class PublicProfileComponent implements OnInit {
  url = `${environment.baseURL}`;
  publicUserId: any;
  publicUserUrl: any;
  user: any = {};
  serviceId: any;
  services: any = [];
  sections: any = [];
  firstService: any = {};
  contact: any = {
    name: "",
    tel: "",
    message: "",
    email: "",
    userEmail: "",
    origin: "",
    user: "",
    service: ""
  }
  loading: boolean = false;

  constructor(private freelancePublic: FreelancePublicService, private route: ActivatedRoute, private helpers: HelpersService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.publicUserUrl = params['id'];

      });


    this.freelancePublic.getUserProfile(this.publicUserUrl)
      .subscribe((user) => {
        this.user = user;
        this.publicUserId = user._id;
  

        this.freelancePublic.getPublicService(this.publicUserId)
        .subscribe((service) => {
       
          
          this.services = service;
          
          if (this.services[0]) {
            this.firstService = {
              id: this.services[0]._id,
              name: this.services[0].name,
              description: this.services[0].description,
              url: this.services[0].url
            };

          }
          
          
        });


      })

    
  }

  send(myForm) {
    this.loading = true;
    this.contact = {
      name: this.contact.name,
      tel: this.contact.tel,
      message: this.contact.message,
      email: this.contact.email,
      userEmail: this.user.email,
      origin: "USER",
      user: this.user._id,
      service: this.services._id

    }

    this.freelancePublic.sendNewContact(this.contact)
      .subscribe((contact) => {
        this.loading = false;
      });
  }

}
