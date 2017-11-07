import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { environment } from "../../../environments/environment";
import { FileUploader } from 'ng2-file-upload';
import { FreelanceApiService } from '../../services/freelance-api.service';
import { SessionService } from '../../services/session.service';
import { HelpersService } from '../../services/helpers.service';
export interface ConfirmModel {
  title: string;
  message: string;
  userId: string;
  serviceId: string
}
@Component({
  selector: 'app-modal-new-section',
  templateUrl: './modal-new-section.component.html',
  styleUrls: ['./modal-new-section.component.css']
})
export class ModalNewSectionComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  feedback: string;
  error: string;
  service: any;
  userId: string;
  serviceId: string;
  newSection: any = {};
  uploaderUpdate: FileUploader = new FileUploader({
    url: `${environment.baseURL}/api/section/image`,
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
  confirm(section) {
    this.helpers.convertToUrl(this.newSection.name, null, (string) => {
      this.newSection.url = string;
      if (this.uploaderUpdate.queue[0]) {
        this.helpers.formatTags(this.newSection.tags, (tags, myForm) => {
          this.uploaderUpdate.onBuildItemForm = (item, form) => {
            item.withCredentials = false;
            form.append('name', this.newSection.name);
            form.append('description', this.newSection.description);
            form.append('tags', tags);
            form.append('user', this.userId);
            form.append('service', this.serviceId);
            form.append('url', this.newSection.url);
          };
          this.uploaderUpdate.uploadAll();
        });

      } else {
        this.newSection = {
          name: this.newSection.name,
          description: this.newSection.description,
          tags: this.newSection.tags,
          user: this.userId,
          service: this.serviceId,
          url: this.newSection.url
        }

        this.freelanceApi.newSection(this.newSection)
          .subscribe((sectionDetails) => {
            this.result = true;
            this.close();
          });

      }
    });
  }

  ngOnInit() {
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
