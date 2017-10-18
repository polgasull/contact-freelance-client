import { Component, OnInit } from '@angular/core';
import { FreelancePublicService } from '../../services/freelance-public.service'
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-public-services',
  templateUrl: './public-services.component.html',
  styleUrls: ['./public-services.component.css']
})
export class PublicServicesComponent implements OnInit {
  url = `${environment.baseURL}`;  

  serviceId: any;
  service: any = {};
  serviceDetail = {};
  userDetail = {};
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
 

  constructor(private freelancePublicService: FreelancePublicService, private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.params
  .subscribe((params) => {
    this.serviceId = params['id']
  });

  this.freelancePublicService.getServiceProfile(this.serviceId)
  .subscribe((service) => {
    this.service = service;
    this.serviceDetail = service.services
    this.userDetail = service.user
    this.sectionDetail = service.section
    console.log('ew',this.serviceDetail);
  });
}

}
