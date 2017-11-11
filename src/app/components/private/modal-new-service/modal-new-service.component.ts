import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";


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
  userId: any;
  objectTo: any = {};

  constructor(
    dialogService: DialogService
  ) { 
    super(dialogService);
  }
  

  ngOnInit() {
    this.objectTo.userId = this.userId;
    this.objectTo.apiAction = "NEWSERVICE";
    this.objectTo.apiUrl = "/api/service/image/";
  }

  confirm(event) {
    this.result = true;
    this.close();
  }

}
