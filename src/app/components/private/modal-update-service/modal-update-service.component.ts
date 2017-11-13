import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title: string;
  message: string;
  objectTo: object;
  actionToDo: string;
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
  actionToDo: string;

  constructor(
    dialogService: DialogService,
  ) {
    super(dialogService);
  }

  ngOnInit() {
    this.actionCase();
    this.objectTo.apiAction = this.actionToDo;
    
    // this.objectTo.sections = this.objectTo.sections;
    console.log('modal update before form',this.objectTo)
    
  }
  actionCase(){
    
     switch (this.actionToDo) {
      case "NEWSERVICE":
         this.objectTo.apiUrl = "/service/image/";
         this.title = "Create new service";
        break;
      case "NEWSECTION":
         this.objectTo.apiUrl = "/section/image";
         this.title = "Create new section";
        break;
      case "UPDATESERVICE":
         this.objectTo.apiUrl = "/service-update/image";
         this.title = "Update service";
        break;
      case "UPDATESECTION":
         this.objectTo.apiUrl = "/section-update/image";
         this.title = "Update section";
        break;
    }
  }

  confirm(event) {
    this.result = true;
    this.close();
  }
   

}
