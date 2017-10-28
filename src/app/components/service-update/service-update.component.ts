import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { ModalUpdateServiceComponent } from "../../components/modal-update-service/modal-update-service.component";
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
      title: 'Confirm title',
      message: 'Confirm message',
      service: this.service,
      
    })
      .subscribe((isConfirmed) => {
        //We get dialog result
        if (isConfirmed) {
          this.goEmiterGo();
        }
      });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    // setTimeout(() => {
    //   disposable.unsubscribe();
    // }, 10000);
  }

  ngOnInit() {
  }
  goEmiterGo() {
    this.onSave.emit(this.service);
  }
  

}
