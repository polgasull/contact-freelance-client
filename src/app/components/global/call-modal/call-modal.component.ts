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
  @Input() ob: any;
  @Output() onSave = new EventEmitter<string>();

  constructor(
    private dialogService: DialogService
  ) { }
  showConfirm() {
    let disposable = this.dialogService.addDialog(ModalUpdateServiceComponent, {
      title: 'Update service',
      message: 'Update service',
      objectTo: this.objectTo
    })
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.goEmiterGo();
        }
      });
  }

  ngOnInit() {
    console.log('ob:', this.ob)
  }
  goEmiterGo() {
    this.onSave.emit();
  }


}
