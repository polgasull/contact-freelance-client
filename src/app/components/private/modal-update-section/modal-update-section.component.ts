import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
// import { environment } from "../../../../environments/environment";
// import { FileUploader } from 'ng2-file-upload';
// import { SessionService } from '../../../services/session.service'
// import { HelpersService } from '../../../services/helpers.service'
// import { FreelanceApiService } from '../../../services/freelance-api.service'


export interface UpdateSectionModel {
  title: string;
  message: string;
  objectTo: any;
}
@Component({
  selector: 'app-modal-update-section',
  templateUrl: './modal-update-section.component.html',
  styleUrls: ['./modal-update-section.component.css']
})
export class ModalUpdateSectionComponent extends DialogComponent<UpdateSectionModel, boolean> implements UpdateSectionModel {
  title: string;
  message: string;
  objectTo: any;
  


  constructor(
    dialogService: DialogService,
  ) { 
    super(dialogService);
  }
  
  ngOnInit() {
    this.objectTo.apiAction = "UPDATESECTION";
    this.objectTo.apiUrl = "/api/section-update/image";
    this.objectTo.userId = this.objectTo.user;
    this.objectTo.serviceId = this.objectTo.service;
  }

  confirm(event) {
    this.result = true;
    this.close();
  }

}

