import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { ModalNewSectionComponent } from "../../private/modal-new-section/modal-new-section.component";

@Component({
  selector: 'app-new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.css']
})
export class NewSectionComponent implements OnInit {
  @Input() userId: any;
  @Input() serviceId: any;
  @Output() onSave = new EventEmitter<string>();

  constructor(
    private dialogService: DialogService
  ) { }
  showConfirm() {
    let disposable = this.dialogService.addDialog(ModalNewSectionComponent, {
      title: 'Create new product',
      message: 'Create new product',
      userId: this.userId,
      serviceId: this.serviceId
    })
      .subscribe((isConfirmed) => {
        console.log('isconfirmed',isConfirmed)
        if (isConfirmed) {
          this.goEmiterGo();
        }
      });
  }

  ngOnInit() {
  }
  goEmiterGo() {
    this.onSave.emit();
  }
}
