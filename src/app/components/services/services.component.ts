import { Component, OnInit } from '@angular/core';
import { FreelanceApiService } from '../../services/freelance-api.service'
import { TagInputModule } from 'ngx-chips';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { SessionService } from '../../services/session.service'
import { HelpersService } from '../../services/helpers.service'
import { ServiceUpdateComponent } from '../../components/service-update/service-update.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  url = `${environment.baseURL}`; 
  feedback: string;
  userId: any = JSON.parse(localStorage.getItem('user'))._id;
  serviceId: String;
  servicesList: any = [];
  serviceDetail = {};
  newService: any = {};
  tags: string;
  uploader: FileUploader = new FileUploader({
    url: `${environment.baseURL}/api/service/image`,
    authToken: "Bearer " + this.session.token,
  });

  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }


  constructor(
    private freelanceApi: FreelanceApiService, 
    private helpers: HelpersService, 
    private session: SessionService
  ) { }

  ngOnInit() {
    
    this.serviceList(this.userId);

    this.uploader.onSuccessItem = (item, response) => {
      this.serviceList(this.userId);
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  serviceList(id){
    this.freelanceApi.servicesList(id)
      .subscribe((list) => {
        this.servicesList = list
      });
  }
  
  submitService(myForm) {
    this.helpers.convertToUrl(this.newService.name, null, (string) => {
      this.newService.url = string; 
      console.log(this.newService)
      this.helpers.formatTags(this.newService.tags, (tags, myForm)=>{
        
        this.uploader.onBuildItemForm = (item, form) => {
          item.withCredentials = false;
          form.append('name', this.newService.name);
          form.append('description', this.newService.description);
          form.append('tags', tags);
          form.append('user', this.userId);
          form.append('url', this.newService.url)
        };
        this.uploader.uploadAll();
        this.newService = {};
      })
    })
  }

  removeService(id) {
    this.freelanceApi.removeService(id)
      .subscribe((details) => {
        this.serviceList(this.userId);
      });
  }

  updateService(service){
    this.freelanceApi.updateService(service)
      .subscribe((serviceDetails) => {
        console.log('XX', service)
        this.serviceList(this.userId);
        console.log('service updated', serviceDetails)

      });
  }
  

}
