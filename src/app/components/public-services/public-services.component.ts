import { Component, OnInit } from '@angular/core';
import { FreelancePublicService } from '../../services/freelance-public.service'
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HelpersService } from '../../services/helpers.service'; 

@Component({
  selector: 'app-public-services',
  templateUrl: './public-services.component.html',
  styleUrls: ['./public-services.component.css']
})
export class PublicServicesComponent implements OnInit {
  url = `${environment.baseURL}`;  

  serviceId: any;
  service: any = {};
<<<<<<< HEAD
  serviceDetail: any = {};
  userDetail: any = {};
=======
  serviceDetail : any = {};
  userDetail : any = {};
>>>>>>> routes without images
  sectionDetail: Array<object>;
  contact: any = {
    name: "",
    tel: "",
    message: "",
    email: "",
    userEmail: "",
    origin: "SERVICE",
    user: "",
    service: ""
  }
 

<<<<<<< HEAD
  constructor(private freelancePublicService: FreelancePublicService, private route: ActivatedRoute, private helpers: HelpersService) { }

  ngOnInit() {
  this.route.params
  .subscribe((params) => {
    this.serviceId = params['url']
  });

  this.freelancePublicService.getServiceProfile(this.serviceId)
  .subscribe((service) => {
    this.service = service;
    this.serviceDetail = service.services
    this.userDetail = service.user
    this.sectionDetail = service.section
    console.log('service url:', this.serviceDetail.url);
  });
}
=======
  constructor(private freelancePublic: FreelancePublicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.serviceId = params['id']
    });

    this.freelancePublic.getServiceProfile(this.serviceId)
    .subscribe((service) => {
      this.service = service;
      this.serviceDetail = service.services
      this.userDetail = service.user
      this.sectionDetail = service.section
      
    });
  }
  send(myForm) {
    this.contact = {
      name: this.contact.name,
      tel: this.contact.tel,
      message: this.contact.message,
      email: this.contact.email,
      userEmail: this.userDetail.email,
      origin: "USER",
      user: this.userDetail._id,
      service: this.serviceDetail._id
    }

    this.freelancePublic.sendNewContact(this.contact)
      .subscribe((contact) => {
        console.log(contact)
      })
  }
>>>>>>> routes without images

}
