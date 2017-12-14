import { Component, OnInit } from '@angular/core';
import { FreelancePublicService } from '../../../services/freelance-public.service'
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-public-sections',
  templateUrl: './public-sections.component.html',
  styleUrls: ['./public-sections.component.css']
})
export class PublicSectionsComponent implements OnInit {
  url = `${environment.baseURL}`;

  sectionId: any;
  section: any = {};
  serviceDetail = {};
  userDetail : any= {};
  sectionDetail : any = {};
  contact: any = {
    name: "",
    tel: "",
    message: "",
    email: "",
    userEmail: "",
    origin: "SECTION",
    user: "",
    service: "",
    section:""
  }

  constructor(
    private freelancePublic: FreelancePublicService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.sectionId = params['sectionId']
      });

    this.freelancePublic.getSectionProfile(this.sectionId)
      .subscribe((section) => {
        this.section = section;
        this.serviceDetail = section.services;
        this.userDetail = section.user;
        this.sectionDetail = section.section;

        this.contact.userEmail = this.userDetail.email;
        this.contact.origin = "SECTION";
        this.contact.user = this.sectionDetail.user;
        this.contact.section = this.sectionDetail._id;
        this.contact.service = this.sectionDetail.service;
        
      },
      (err) => {
        this.router.navigate(['/e/error'])
      });
      
  }

}
