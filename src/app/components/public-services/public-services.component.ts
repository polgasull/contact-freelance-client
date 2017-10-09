import { Component, OnInit } from '@angular/core';
import { FreelancePublicService } from '../../services/freelance-public.service'


@Component({
  selector: 'app-public-services',
  templateUrl: './public-services.component.html',
  styleUrls: ['./public-services.component.css']
})
export class PublicServicesComponent implements OnInit {

  constructor(private freelancePublic: FreelancePublicService) { }
  serviceId: String;
  servicesList: any =[];

  ngOnInit() {
    this.freelancePublic.getPublicService(this.serviceId)
    .subscribe((service) => {
      this.servicesList = service;
  })
}

}
