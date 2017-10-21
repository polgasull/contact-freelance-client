import { Component, OnInit } from '@angular/core';
import { FreelancePublicService } from '../../services/freelance-public.service'
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

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
    origin: "SERVICE",
    user: "",
    service: ""
  }

  constructor(private freelancePublic: FreelancePublicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.sectionId = params['sectionId']
        console.log(params['sectionId'])
      });

    this.freelancePublic.getSectionProfile(this.sectionId)
      .subscribe((section) => {
        this.section = section;
        this.serviceDetail = section.services
        this.userDetail = section.user
        this.sectionDetail = section.section
        console.log(this.sectionDetail.url)
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
      section: this.sectionDetail._id

    }

    this.freelancePublic.sendNewContact(this.contact)
      .subscribe((contact) => {
        console.log(contact)
      })
  }

}
