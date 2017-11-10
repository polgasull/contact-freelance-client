import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { environment } from "../../../../environments/environment";
import { FileUploader } from 'ng2-file-upload';
import { FreelanceApiService } from '../../../services/freelance-api.service';
import { SessionService } from '../../../services/session.service';
import { HelpersService } from '../../../services/helpers.service';

export interface ConfirmModel {
  title: string;
  message: string;
  userId:any;
}
@Component({
  selector: 'app-modal-new-service',
  templateUrl: './modal-new-service.component.html',
  styleUrls: ['./modal-new-service.component.css']
})
export class ModalNewServiceComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  feedback: string;
  error: string;
  service: any;
  userId:any;
  newService: any = {};
  uploaderUpdate: FileUploader = new FileUploader({
    url: `${environment.baseURL}/api/service/image/`,
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
    this.helpers.convertToUrl(this.newService.name, null, (string) => {
      this.newService.url = string;
      if (this.uploaderUpdate.queue[0]) {
        this.helpers.formatTags(this.newService.tags, (tags, myForm) => {
          this.uploaderUpdate.onBuildItemForm = (item, form) => {
            item.withCredentials = false;
            form.append('name', this.newService.name);
            form.append('description', this.newService.description);
            form.append('tags', tags);
            form.append('user', this.userId);
            form.append('service', this.newService.service);
            form.append('url', this.newService.url);
          };
          this.uploaderUpdate.uploadAll();
        });

      } else {
        this.newService = {
          name: this.newService.name,
          description: this.newService.description,
          tags: this.newService.tags,
          user: this.userId,
          url: this.newService.url
        }

        this.freelanceApi.newService(this.newService)
          .subscribe((serviceDetails) => {
            this.result = true;
            this.close();
          });

      }
    });
  }

  ngOnInit() {
    console.log(this.userId)
    //uploader
    this.uploaderUpdate.onSuccessItem = (item, response) => {
      this.result = true;
      this.close();
    };

    this.uploaderUpdate.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;

    };
  }

}
