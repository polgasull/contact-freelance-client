import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreelancePublicService } from '../../services/freelance-public.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  url = `${environment.baseURL}`;
  userList: any = [];
  serviceList: any = [];
  sectionList: any = [];
  query: string;

  constructor(private freelancePublicService: FreelancePublicService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.query = params['query']
      });

    this.freelancePublicService.searchUserList(this.query)
      .subscribe((user) => {
        this.userList = user;
        console.log('User List:', this.userList[0]);
      })

    this.freelancePublicService.searchServiceList(this.query)
      .subscribe((service) => {
        this.serviceList = service;
        console.log('Service List:', this.serviceList[0])
      })

    this.freelancePublicService.searchSectionList(this.query)
    .subscribe((section) => {
      this.sectionList = section;
      console.log('Section List', this.sectionList[0])
    })
  }

}
