import { Component, OnInit } from '@angular/core';
import { FreelancePublicService } from '../../services/freelance-public.service'

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {
  userId:any;
  user :any = {
  };

  constructor(private freelancePublic: FreelancePublicService) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('user'))._id
    
    this.freelancePublic.getUserProfile(this.userId)
    .subscribe((user) => {
      this.user = user;
    })
  }

}
