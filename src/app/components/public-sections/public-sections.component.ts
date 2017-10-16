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
  service: any = {};
  serviceDetail = {};
  userDetail = {};
  sectionDetail: Array<object>;


  constructor(private freelancePublicService: FreelancePublicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.sectionId = params['id']
      });

    this.freelancePublicService.getSectionProfile(this.sectionId)
      .subscribe((section) => {
        this.service = section;
        this.serviceDetail = section.services
        this.userDetail = section.user
        this.sectionDetail = section.section
        console.log(this.service);
      });



  }

}
