import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';
import { FreelanceApiService } from '../../services/freelance-api.service'
import { environment } from '../../../environments/environment';
import { SessionService } from '../../services/session.service'
import { HelpersService } from '../../services/helpers.service'

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  serviceList: any = [];
  url = `${environment.baseURL}`;
  userId: any = JSON.parse(localStorage.getItem('user'))._id;
  serviceId: String;
 
 

  constructor(
    private freelanceApi: FreelanceApiService, 
    private helpers: HelpersService, 
    private session: SessionService
  ) { }

  ngOnInit() {
    this.serviceListing(this.userId);
  }

  serviceListing(id){
    this.freelanceApi.servicesList(id)
      .subscribe((list) => {
        this.serviceList = list;
      });
  }

  removeService(id){
    this.freelanceApi.removeService(id)
      .subscribe((details) => {
        this.serviceListing(this.userId)
      });
  }


}
