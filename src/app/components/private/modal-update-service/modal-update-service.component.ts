import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title: string;
  message: string;
  objectTo: object;
}
@Component({
  selector: 'app-modal-update-service',
  templateUrl: './modal-update-service.component.html',
  styleUrls: ['./modal-update-service.component.css']
})
export class ModalUpdateServiceComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel { 
  title: string;
  message: string;
  objectTo: any;

  constructor(
    dialogService: DialogService,
  ) {
    super(dialogService);
  }

  ngOnInit() {
    if (!this.objectTo.apiAction) {
      this.objectTo.apiAction = "UPDATESERVICE";
    }
    
    this.objectTo.apiUrl = "/api/service-update/image";
    this.objectTo.userId = this.objectTo.user;
    this.objectTo.sections = this.objectTo.sections;
    
  }

  confirm(event) {
    this.result = true;
    this.close();
  }
   

}
