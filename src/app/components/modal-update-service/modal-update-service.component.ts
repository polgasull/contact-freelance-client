import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { environment } from "../../../environments/environment";
import { FileUploader } from 'ng2-file-upload';

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
  service: object;
  updateService:any = {};
  url: string = environment.baseURL;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm(service) {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }

  

  ngOnInit() {
  }
   

}
