import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreelancePublicService } from '../../services/freelance-public.service';
import { HelpersService } from '../../services/helpers.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  url = `${environment.baseURL}`;
  userList: any = [];
  users: any = [];  
  serviceList: any = [];
  services: any = [];
  sectionList: any = [];
  sections: any = [];
  query: string;
  limit: number = 4;
  skipUser: number= 0;
  skipService: number = 0;
  skipSection: number = 0;
  skipServiceLoadMore: number = 0;
  search: string;
  i: number = 0;
  j: number = 0;

  constructor(private freelancePublicService: FreelancePublicService, private route: ActivatedRoute, private router: Router, private helpers: HelpersService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.query = params['query'];
      });
    this.search = this.query;

      this.searchUserFunction();
      this.searchServiceFunction();
      this.skipUser = 4;
      this.skipService = 4;
  }
  
// pendiente new search user y new search service

  newSearch() {
    this.serviceList = [];
    this.userList = [];
    this.skipUser = 0;
    this.skipService = 0;
    this.query = this.search;
    this.searchUserFunction();
    this.searchServiceFunction();
    this.skipUser = 4;
    this.skipService = 4;
    this.skipServiceLoadMore = 4;
    this.j = 1;
    this.i = 1;
  }


  searchUserFunction() {
    this.freelancePublicService.searchUserList(this.query, this.limit, this.skipUser)
      .subscribe((user) => {
        this.users = user;
        this.helpers.arrayReassign(this.users, this.userList);
      });
  }

  searchServiceFunction() {
    this.freelancePublicService.searchServiceList(this.query, this.limit, this.skipService)
      .subscribe((service) => {
        this.services = service;
        this.skipService = 1;
        this.helpers.arrayReassign(this.services, this.serviceList);
      })
  }
  loadSearchServiceFunction() {
    this.freelancePublicService.searchServiceList(this.query, this.limit, this.skipServiceLoadMore * this.j)
      .subscribe((service) => {
        this.services = service;
        this.j += 1;
        this.helpers.arrayReassign(this.services, this.serviceList);
      })
  }
  loadMoreSearchUserFunction() {
    this.freelancePublicService.searchUserList(this.query, this.limit, this.skipUser * this.i)
      .subscribe((user) => {
        this.users = user;
        this.i += 1;
        this.helpers.arrayReassign(this.users, this.userList);
      });
  }
  


}
