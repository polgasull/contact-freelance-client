import { Component, OnInit } from '@angular/core';
import { FreelanceApiService } from '../../services/freelance-api.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usersList: Array<any> = [];
  userLocal: any;
  idA:any;
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
  };

  constructor(private freelanceApi: FreelanceApiService) { }

  ngOnInit() {
    this.userLocal= localStorage.getItem('user');
    this.idA= JSON.parse(this.userLocal)._id
    console.log(this.userLocal);
    console.log(this.idA);
    
    this.freelanceApi.get(this.idA)
    .subscribe((user) => {
      this.user = user;
    })
  }

 
  }



