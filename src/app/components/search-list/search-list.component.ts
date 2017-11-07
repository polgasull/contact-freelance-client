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
  search: string;

  constructor(private freelancePublicService: FreelancePublicService, private route: ActivatedRoute, private router: Router, private helpers: HelpersService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.query = params['query'];
      });
    this.search = this.query;

      this.searchUserFunction();
      this.searchServiceFunction();
  }
  
  newSearch() {
    this.serviceList = [];
    this.userList = [];
    this.skipUser = 0;
    this.skipService = 0;
    this.query = this.search;
    this.searchUserFunction();
    this.searchServiceFunction();
  }


  searchUserFunction() {
    this.freelancePublicService.searchUserList(this.query, this.limit, this.skipUser)
      .subscribe((user) => {
        this.users = user
        this.skipUser++;
        this.helpers.arrayReassign(this.users, this.userList)
      
      })
      
  }

  searchServiceFunction() {
    this.freelancePublicService.searchServiceList(this.query, this.limit, this.skipService)
      .subscribe((service) => {
        this.services = service;
        this.skipService++;
        this.helpers.arrayReassign(this.services, this.serviceList)        
        
      })
  }
  


}
