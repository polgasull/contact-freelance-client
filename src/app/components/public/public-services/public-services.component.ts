import { Component, OnInit } from '@angular/core';
import { FreelancePublicService } from '../../../services/freelance-public.service'
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { HelpersService } from '../../../services/helpers.service';


@Component({
  selector: 'app-public-services',
  templateUrl: './public-services.component.html',
  styleUrls: ['./public-services.component.css']
})
export class PublicServicesComponent implements OnInit {
  url = `${environment.baseURL}`;

  serviceId: any;
  service: any = {};
  serviceDetail: any = {};
  userDetail: any = {};
  sectionDetail: Array<object>;
  error404: boolean = false;
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

  constructor(
    private freelancePublicService: FreelancePublicService,
    private route: ActivatedRoute,
    private helpers: HelpersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.serviceId = params['url']
      });
    this.freelancePublicService.getServiceProfile(this.serviceId)
      .subscribe((service) => {
        if (service.message === "error") {
          this.error404 = true;
        }
        this.service = service;
        this.serviceDetail = service.services;
        this.userDetail = service.user;
        this.sectionDetail = service.section;

        this.contact.userEmail = this.userDetail.email;
        this.contact.origin = "SECTION";
        this.contact.user = this.serviceDetail.user;
        this.contact.service = this.serviceDetail._id;
        console.log(this.contact)
      });
  }
}
