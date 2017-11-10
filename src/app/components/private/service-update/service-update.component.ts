import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { ModalUpdateServiceComponent } from "../../private/modal-update-service/modal-update-service.component";
@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css']
})
export class ServiceUpdateComponent implements OnInit {
  @Input() service:any; 
  @Output() onSave = new EventEmitter<string>();

  
  constructor(private dialogService: DialogService) { }
  showConfirm() {
    let disposable = this.dialogService.addDialog(ModalUpdateServiceComponent, {
      title: 'Update service',
      message: 'Update service',
      service: this.service
    })
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.goEmiterGo();
        }
      });
  }

  ngOnInit() {
  }
  goEmiterGo() {
    this.onSave.emit(this.service);
  }
  

}
