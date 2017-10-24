import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { FreelancePublicService } from '../../services/freelance-public.service'

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  user: any = {};
  query: string;

  constructor(private freelancePublicService: FreelancePublicService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.query = params['query']
    });

    this.freelancePublicService.searchUserList(this.query)
    .subscribe((user) => {
      this.user = user;
      console.log('User Name:', this.user.name);
    })
  }

}
