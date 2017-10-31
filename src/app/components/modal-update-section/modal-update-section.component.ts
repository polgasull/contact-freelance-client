import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { environment } from "../../../environments/environment";
import { FileUploader } from 'ng2-file-upload';
import { SessionService } from '../../services/session.service'
import { HelpersService } from '../../services/helpers.service'
import { FreelanceApiService } from '../../services/freelance-api.service'


export interface UpdateSectionModel {
  title: string;
  message: string;
  section: object;
  uploaderUpdate: FileUploader;
}
@Component({
  selector: 'app-modal-update-section',
  templateUrl: './modal-update-section.component.html',
  styleUrls: ['./modal-update-section.component.css']
})
export class ModalUpdateSectionComponent extends DialogComponent<UpdateSectionModel, boolean> implements UpdateSectionModel {
  title: string;
  message: string;
  section: any;
  updateSection: any = {};
  url: string = environment.baseURL;
  uploaderUpdate: FileUploader = new FileUploader({
    url: `${environment.baseURL}/api/section-update/image`,
    authToken: "Bearer " + this.session.token,
  });


  constructor(
    dialogService: DialogService,
    private session: SessionService,
    private freelanceApi: FreelanceApiService,
    private helpers: HelpersService
  ) { 
    super(dialogService);
  }
  confirm(section) {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    if (this.uploaderUpdate.queue[0]) {
      this.helpers.formatTags(this.section.tags, (tags, myForm) => {
        this.uploaderUpdate.onBuildItemForm = (item, form) => {
          item.withCredentials = false;
          form.append('id', this.section._id);
          form.append('name', this.section.name);
          form.append('description', this.section.description);
          form.append('tags', tags);
          form.append('user', this.section.user);
          form.append('service', this.section.service);
        };
        this.uploaderUpdate.uploadAll();
      });
      
    } else {
      this.section = {
        name: this.section.name,
        description: this.section.description,
        tags: this.section.tags,
        user: this.section.user,
        _id: this.section._id,
      }
          this.freelanceApi.updateSection(this.section)
            .subscribe((serviceDetails) => {});
    }
  
    
  }
  ngOnInit() {
    //uploader
    this.uploaderUpdate.onSuccessItem = (item, response) => {
      // this.feedback = JSON.parse(response).message;
      // this.sectionList();
      this.result = true;
      this.close();
    };

    this.uploaderUpdate.onErrorItem = (item, response, status, headers) => {
      // this.feedback = JSON.parse(response).message;

    };
  }

}

