import { Component, OnInit } from '@angular/core';
import { FreelanceApiService } from '../../../services/freelance-api.service'
import { SessionService } from '../../../services/session.service'
import { HelpersService } from '../../../services/helpers.service'


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  userId: any = JSON.parse(localStorage.getItem('user'))._id;
  serviceId: String;
  newService: any = {};
  servicesList: any = [];
  updateService: any = 'UPDATESERVICE';
  createService: any = 'NEWSERVICE';
 
  constructor(
    private freelanceApi: FreelanceApiService, 
    private helpers: HelpersService, 
    private session: SessionService
  ) { }

  ngOnInit() {
    this.serviceList(this.userId);
    this.newService.user = this.userId;
  }

  serviceList(id){
    this.freelanceApi.servicesList(id)
      .subscribe((list) => {
        this.servicesList = list;
        this.cleanForm();
       
      });
  }

  removeService(id) {
    this.freelanceApi.removeService(id)
      .subscribe((details) => {
        this.serviceList(this.userId);
      });
  }
  cleanForm(){
    this.newService.name = "";
    this.newService.description = "";
    this.newService.tags = [];
  }
  

}
