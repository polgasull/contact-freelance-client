import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { ModalUpdateServiceComponent } from "../../private/modal-update-service/modal-update-service.component";

@Component({
  selector: 'app-call-modal',
  templateUrl: './call-modal.component.html',
  styleUrls: ['./call-modal.component.css']
})
export class CallModalComponent implements OnInit {
  @Input() objectTo: any;
  @Input() actionToDo: any;
  @Output() onSave = new EventEmitter<string>();

  constructor(
    private dialogService: DialogService
  ) { }
  showConfirm() {
    let disposable = this.dialogService.addDialog(ModalUpdateServiceComponent, {
      objectTo: this.objectTo,
      actionToDo: this.actionToDo
    })
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.goEmiterGo();
        }
      });
  }

  ngOnInit() {
    console.log('objectToCall', this.objectTo)
  }

  
    
  goEmiterGo() {
    this.onSave.emit();
  }


}
