import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { environment } from "../../../environments/environment";
import { FileUploader } from 'ng2-file-upload';
import { FreelanceApiService } from '../../services/freelance-api.service';
import { SessionService } from '../../services/session.service';
import { HelpersService } from '../../services/helpers.service'

export interface ConfirmModel {
  title: string;
  message: string;
  service: object;
}
@Component({
  selector: 'app-modal-update-service',
  templateUrl: './modal-update-service.component.html',
  styleUrls: ['./modal-update-service.component.css']
})
export class ModalUpdateServiceComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel { 
  title: string;
  message: string;
  feedback: string;
  error: string;
  service: any;
  updateService:any = {};
  uploaderUpdate: FileUploader = new FileUploader({
    url: `${environment.baseURL}/api/service-update/image`,
    authToken: "Bearer " + this.session.token,
  });
  url: string = environment.baseURL;
  constructor(
    dialogService: DialogService,
    private freelanceApi: FreelanceApiService,
    private session: SessionService,
    private helpers: HelpersService
  ) {
    super(dialogService);
  }
  confirm(service) {
    this.helpers.convertToUrl(this.service.name, null, (string) => {
      this.service.url = string;
      if (this.uploaderUpdate.queue[0]) {
        this.helpers.formatTags(this.service.tags, (tags, myForm) => {
          this.uploaderUpdate.onBuildItemForm = (item, form) => {
            item.withCredentials = false;
            form.append('id', this.service._id);
            form.append('name', this.service.name);
            form.append('description', this.service.description);
            form.append('tags', tags);
            form.append('user', this.service.user);
            form.append('service', this.service.service);
            form.append('url', this.service.url);
          };
          this.uploaderUpdate.uploadAll();
        });

      } else {
        this.service = {
          name: this.service.name,
          description: this.service.description,
          tags: this.service.tags,
          user: this.service.user,
          _id: this.service._id,
          url: this.service.url
        }

        this.freelanceApi.updateService(this.service)
          .subscribe((serviceDetails) => {
            this.result = true;
            this.close();
            
          });

      }
    });
  }

  

  ngOnInit() {
    //uploader
    this.uploaderUpdate.onSuccessItem = (item, response) => {
      // this.feedback = JSON.parse(response).message;
      // this.sectionList();
      console.log('success')
      this.result = true;
      this.close();
    };

    this.uploaderUpdate.onErrorItem = (item, response, status, headers) => {
      // this.feedback = JSON.parse(response).message;

    };
  }
   

}
