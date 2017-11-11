import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
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
  userId: string;
  serviceId: string;
  objectTo: any = {};

  constructor(
    dialogService: DialogService
  ) {
    super(dialogService);
  }
  

  ngOnInit() {
    this.objectTo.userId = this.userId;
    this.objectTo.serviceId = this.serviceId;
    this.objectTo.apiAction = "NEWSECTION";
    this.objectTo.apiUrl = "/api/section/image";
  }

  confirm(event) {
    this.result = true;
    this.close();
  }

}
