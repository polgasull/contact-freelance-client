import { Component, OnInit } from '@angular/core';
import { FreelancePublicService } from '../../services/freelance-public.service'
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-public-services',
  templateUrl: './public-services.component.html',
  styleUrls: ['./public-services.component.css']
})
export class PublicServicesComponent implements OnInit {
  url = `${environment.baseURL}`;  
  publicUserId:any;
  user :any = {
  };
  serviceId: any;
  services: any = [];
  sections: any = [];


  constructor(private freelancePublic: FreelancePublicService, private route: ActivatedRoute) { }

  ngOnInit() {
  

}

}
