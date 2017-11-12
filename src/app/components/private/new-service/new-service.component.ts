import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { ModalNewServiceComponent } from "../../private/modal-new-service/modal-new-service.component";
@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent implements OnInit {
  @Input() userId: any; 
  @Output() onSave = new EventEmitter<string>();

  constructor(private dialogService: DialogService) { }
  showConfirm() {
    let disposable = this.dialogService.addDialog(ModalNewServiceComponent, {
      title: 'Create new service',
      message: 'Create new service',
      userId: this.userId

    })
      .subscribe((isConfirmed) => {
        //We get dialog result
        if (isConfirmed) {
          this.goEmiterGo();
        }
      });
  }

  ngOnInit() {
    console.log(this.userId)
  }
  goEmiterGo() {
    this.onSave.emit();
  }
}
