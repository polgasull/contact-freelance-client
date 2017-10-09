import { Component, OnInit } from '@angular/core';
import { FreelanceApiService } from '../../services/freelance-api.service'
import { TagInputModule } from 'ngx-chips';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { SessionService } from '../../services/session.service'

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  feedback: string;
  userId: any = JSON.parse(localStorage.getItem('user'))._id;
  serviceId: String;
  servicesList: any = [];
  newSection: any = {



  };
  tags: string;
  uploader: FileUploader = new FileUploader({
    url: `${environment.baseURL}/api/service/image`,
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

  constructor(private freelanceApi: FreelanceApiService, private session: SessionService) { }

  ngOnInit() {

    //Service List
    this.freelanceApi.sectionsList(this.userId)
      .subscribe((list) => {
        this.servicesList = list;
      });
    //uploader
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;

    };
  }
  //función repetida en services.components.ts
  formatTags(tags, cb) {
    for (let i = 0; i < tags.length; i++) {
      if (i == 0) {
        this.tags = tags[i].value;
      } else {
        this.tags += ', ' + tags[i].value;
      }
    }
    cb();
  }

  submitSection(myForm) {

    this.formatTags(this.newSection.tags, (myForm) => {
      this.uploader.onBuildItemForm = (item, form) => {
        item.withCredentials = false;
        form.append('name', this.newSection.name);
        form.append('description', this.newSection.description);
        form.append('tags', this.tags);
        form.append('user', this.userId);
      };

      this.uploader.uploadAll();
      this.newSection = {};

      // this.freelanceApi.editUserProfile(this.user)
      //   .subscribe((user) => {
      //   });
    })

  }

}
