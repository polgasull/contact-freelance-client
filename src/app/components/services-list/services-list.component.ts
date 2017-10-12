import { Component, OnInit } from '@angular/core';
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
  url = `${environment.baseURL}`;
  userId: any = JSON.parse(localStorage.getItem('user'))._id;
  serviceId: String;
  servicesList: any = [];
 

  constructor(private freelanceApi: FreelanceApiService, private helpers: HelpersService, private session: SessionService) { }

  ngOnInit() {
    //Service List
    this.freelanceApi.servicesList(this.userId)
      .subscribe((list) => {
        this.servicesList = list;
      });
  }


}
