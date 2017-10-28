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
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
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
      }

      this.freelanceApi.updateService(this.service)
        .subscribe((serviceDetails) => {
          console.log('serviceDetails subscribe', serviceDetails)

        });

    }
    
      
    
    this.result = true;
    this.close();
  }

  

  ngOnInit() {
  }
   

}