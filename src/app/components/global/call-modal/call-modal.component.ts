import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { ModalComponent } from "../../private/modal/modal.component";

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
  

  ngOnInit() {
  }

  showConfirm() {

    let disposable = this.dialogService.addDialog(ModalComponent, {
      objectTo: this.objectTo,
      actionToDo: this.actionToDo
    }, 
    { 
      closeByClickingOutside : true
    })
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.goEmiterGo();
        }
      });
  }
  
    
  goEmiterGo() {
    this.onSave.emit();
  }


}
