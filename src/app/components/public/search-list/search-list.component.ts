import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreelancePublicService } from '../../../services/freelance-public.service';
import { HelpersService } from '../../../services/helpers.service';
import { environment } from '../../../../environments/environment';

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
  query: any;
  limit: number = 4;
  skipUser: number= 0;
  skipService: number = 0;
  skipSection: number = 0;
  search: string;
  searchResult: string;
  loadUserMultiplier: number = 0;
  loadServiceMultiplier: number = 0;

  constructor(private freelancePublicService: FreelancePublicService, private route: ActivatedRoute, private helpers: HelpersService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.query = params['query'];
        this.searchResult = this.query
      });
      
      this.search = this.query;
      this.searchUserFunction();
      this.searchServiceFunction();
      this.skipUser = 4;
      this.skipService = 4;
      this.loadUserMultiplier = 1;
      this.loadServiceMultiplier = 1;
  }
  
// pendiente new search user y new search service

  newSearchByUser() {
    this.serviceList = [];
    this.userList = [];
    this.skipUser = 0;
    this.query = this.search;
    this.searchUserFunction();
    this.skipUser = 4;
    this.loadUserMultiplier = 1;
  }

  newSearchByService() {
    this.serviceList = [];
    this.userList = [];
    this.skipService = 0;
    this.query = this.search;
    this.searchServiceFunction();
    this.skipService = 4;
    this.loadServiceMultiplier = 1;
  }

  newSearchBoth() {
    this.serviceList = [];
    this.userList = [];
    this.skipUser = 0;
    this.skipService = 0;
    this.query = this.search;
    this.searchServiceFunction();
    this.searchUserFunction();    
    this.skipUser = 4;
    this.skipService = 4;
    this.loadServiceMultiplier = 1;
    this.loadUserMultiplier = 1;
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
        this.helpers.arrayReassign(this.services, this.serviceList);
      })
  }

  loadMoreSearchServiceFunction() {
    this.freelancePublicService.searchServiceList(this.query, this.limit, this.skipService * this.loadServiceMultiplier)
      .subscribe((service) => {
        this.services = service;
        this.loadServiceMultiplier += 1;
        this.helpers.arrayReassign(this.services, this.serviceList);
      })
  }
  loadMoreSearchUserFunction() {
    this.freelancePublicService.searchUserList(this.query, this.limit, this.skipUser * this.loadUserMultiplier)
      .subscribe((user) => {
        this.users = user;
        this.loadUserMultiplier += 1;
        this.helpers.arrayReassign(this.users, this.userList);
      });
  }
  


}
