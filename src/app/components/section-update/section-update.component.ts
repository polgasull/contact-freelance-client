import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { ModalUpdateSectionComponent } from "../../components/modal-update-section/modal-update-section.component";
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-section-update',
  templateUrl: './section-update.component.html',
  styleUrls: ['./section-update.component.css']
})
export class SectionUpdateComponent implements OnInit {
  @Input() section: any;
  @Output() onSave = new EventEmitter<string>();

  constructor(private dialogService: DialogService) {}
    showConfirm() {
      let disposable = this.dialogService.addDialog(ModalUpdateSectionComponent, {
        title: 'Update product',
        message: 'Update product',
        section: this.section,
      })
        .subscribe((isConfirmed) => {
          //We get dialog result
          if (isConfirmed) {
            this.section = {
              name: this.section.name,
              description: this.section.description,
              tags: this.section.tags,
              user: this.section.user,
              _id: this.section._id,
            }
            this.goEmiterGo();
          }
        });
  }

  ngOnInit() {
    
  }

  goEmiterGo() {
    this.onSave.emit(this.section);
  }

}
