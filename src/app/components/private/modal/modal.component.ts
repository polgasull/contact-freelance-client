import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
// import { Options } from 'ngx-chips/dist/modules/core';

export interface ConfirmModel {
  title: string;
  message: string;
  objectTo: object;
  actionToDo: string;
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel { 
  title: string;
  message: string;
  objectTo: any;
  actionToDo: string;
  

  constructor(
    dialogService: DialogService,
  ) {
    super(dialogService);
  }

  ngOnInit() {
    this.actionCase(this.actionToDo, this.objectTo);
  }
  actionCase(action, object){
     switch (action) {
      case "NEWSERVICE":
         object.apiUrl = "/api/service/image/";
         this.title = "Create new service";
        break;
      case "NEWSECTION":
         object.apiUrl = "/api/section/image";
         this.title = "Create new section";
        break;
      case "UPDATESERVICE":
         object.apiUrl = "/api/service-update/image";
         this.title = "Update service";
        break;
      case "UPDATESECTION":
         object.apiUrl = "/api/section-update/image";
         this.title = "Update section";
        break;
    }
    object.apiAction = action;
  }

  confirm(event) {
    this.result = true;
    this.close();
  }
   

}
