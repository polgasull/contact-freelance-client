import { Component, OnInit } from '@angular/core';
import { FreelanceApiService } from '../../services/freelance-api.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usersList = []
  user = {
    name: '',
    surname: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    country: '',
    klaim: '',
    tags: [],
    linkedin: '',
    facebook: '',
    google:'',
    web:'',
    userImage: '',
    bigImage: '',
  }

  constructor(private freelanceApi: FreelanceApiService) { }

  ngOnInit() {
    this.freelanceApi.getUserList()
    .subscribe((users) => {
      console.log(users);
      this.usersList = users
    })
  }

  // getUserDetails(id) {
  //   this.freelanceApi.get(id)
  //     .subscribe((user) => {
  //       this.user = user;
  //     })
  // }


}
