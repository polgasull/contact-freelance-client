import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

import { FreelanceApiService } from '../../services/freelance-api.service'
import { TagInputModule } from 'ngx-chips';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { SessionService } from '../../services/session.service'
import { HelpersService } from '../../services/helpers.service'


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  url = `${environment.baseURL}`;
  feedback: string;
  userId: any = JSON.parse(localStorage.getItem('user'))._id;
  serviceId: any;
  sectionId:any;
  serviceDetails: any = {};
  sectionsList: any = [];
  newSection: any = {};
  tags: string;
  uploader: FileUploader = new FileUploader({
    url: `${environment.baseURL}/api/section/image`,
    authToken: "Bearer " + this.session.token,
  });

  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(
    private freelanceApi: FreelanceApiService, 
    private session: SessionService, 
    private helpers: HelpersService,
    private route: ActivatedRoute,
    private router: Router 
            ) { }

  ngOnInit() {
    //capture id from url
    this.route.params
      .subscribe((params) => {
        this.serviceId = params['id'];
      });
    //Service Details
    this.freelanceApi.serviceDetails(this.serviceId)
      .subscribe((details) => {
        this.serviceDetails = details;
    });
    //SectionList
    this.sectionList();


    //uploader
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
      this.sectionList();
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;

    };
  }
  sectionList(){
    this.freelanceApi.sectionsList(this.serviceId)
      .subscribe((details) => {
        this.sectionsList = details;
      });
  }
  
  removeSection(sectionId){
    this.freelanceApi.removeSection(sectionId)
    .subscribe((details)=>{
      this.sectionList();
      this.newSection = {};
     
    });
  }

  submitSection(myForm) {
    this.helpers.formatTags(this.newSection.tags, (tags, myForm) => {
      this.uploader.onBuildItemForm = (item, form) => {
        item.withCredentials = false;
        form.append('name', this.newSection.name);
        form.append('description', this.newSection.description);
        form.append('tags', tags);
        form.append('user', this.userId);
        form.append('service', this.serviceId);
      };
      this.uploader.uploadAll();
      
    });
  }

}
