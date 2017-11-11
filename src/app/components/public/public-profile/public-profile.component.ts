import { Component, OnInit } from '@angular/core';
import { FreelancePublicService } from '../../../services/freelance-public.service'
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { HelpersService } from '../../../services/helpers.service';


@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css'],
  
})
export class PublicProfileComponent implements OnInit {
  url = environment.baseURL;
  clientUrl = environment.clientBaseURL;
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
    service: "",
  }

  

  constructor(
    private freelancePublic: FreelancePublicService, 
    private route: ActivatedRoute, 
    private helpers: HelpersService,
    private router: Router
  ) { }

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
          this.contact.userEmail = this.user.email;
          this.contact.origin = "USER";
          this.contact.user = this.user._id;
        });
      },
      (err)=>{
        this.router.navigate(['/e/error'])
      });
  }

}
