import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { FileUploader } from 'ng2-file-upload';
import { FreelanceApiService } from '../../../services/freelance-api.service';
import { SessionService } from '../../../services/session.service';
import { HelpersService } from '../../../services/helpers.service';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-form-create-update',
  templateUrl: './form-create-update.component.html',
  styleUrls: ['./form-create-update.component.css']
})
export class FormCreateUpdateComponent implements OnInit {
  @Input() objectTo: any;
  @Output() onClose = new EventEmitter<string>();
  @Output() onSubmit = new EventEmitter<string>();
  newObject: any;
  feedback: any;
  uploaderUpdate: FileUploader;
  error: any;
  
  

  constructor(
    private freelanceApi: FreelanceApiService,
    private session: SessionService,
    private helpers: HelpersService
  ) { }

  ngOnInit() {  
    this.objectTo.description = !this.objectTo.description ? "" : this.objectTo.description; 
    
    
    this.uploaderUpdate = new FileUploader({
      url: `${environment.baseURL + this.objectTo.apiUrl}`,
      authToken: "Bearer " + this.session.token,
    });

    this.uploaderUpdate.onSuccessItem = (item, response) => {
      this.onSubmit.emit();
      this.close();
    };

    this.uploaderUpdate.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }
  
  close(){
    this.onClose.emit();
  }

  confirm() {
    let save = new Promise((resolve, reject) => {
      if (resolve) {
        resolve("Stuff worked!");
      } else {
        reject(Error("It broke"));
      }
    });

    save.then((string) => {
      return this.helpers.convertToUrl(this.objectTo.name, null, null);
    })
    .then((string)=>{
      this.objectTo.url = string;
      if (!this.uploaderUpdate.queue[0]) {
        this.newObject = {
          _id: this.objectTo._id,
          name: this.objectTo.name,
          description: this.objectTo.description,
          tags: this.objectTo.tags,
          user: this.objectTo.user,
          service: this.objectTo.service,
          section: this.objectTo.section,
          sections:this.objectTo.sections,
          url: this.objectTo.url
        }
        
        this.selectAction(this.newObject);
      }
      return string;
    })
    .then((string)=>{
      if (this.uploaderUpdate.queue[0]) {
        return this.helpers.formatTags(this.objectTo.tags, null);
      }
    })
    .then((tags)=>{
      this.uploaderUpdate.onBuildItemForm = (item, form) => {
        item.withCredentials = false;
        form.append('id', this.objectTo._id);
        form.append('name', this.objectTo.name);
        form.append('description', this.objectTo.description);
        form.append('tags', tags);
        form.append('user', this.objectTo.user);
        form.append('service', this.objectTo.service);
        form.append('section', this.objectTo.section);
        form.append('sections', this.objectTo.sections);
        form.append('url', this.objectTo.url);
      };
      this.uploaderUpdate.uploadAll();
    })
    .catch((error)=> {
      this.feedback = error; 
    });
  }

  selectAction(objectTo){
    switch (this.objectTo.apiAction) {
      case "NEWSERVICE":
        this.freelanceApi.newService(objectTo)
          .subscribe((serviceDetails) => {
            this.close();
            this.onSubmit.emit();
          });
        break;
      case "NEWSECTION":
        this.freelanceApi.newSection(objectTo)
          .subscribe((sectionDetails) => {
            this.close();
            this.onSubmit.emit();
          });
        break;
      case "UPDATESERVICE":
        this.freelanceApi.updateService(objectTo)
          .subscribe((serviceDetails) => {
            this.close();
            this.onSubmit.emit();
          });
        break;
      case "UPDATESECTION":
        this.freelanceApi.updateSection(objectTo)
          .subscribe((serviceDetails) => {
            this.close();
            this.onSubmit.emit();
          });
        break;    
    }
  }
}
