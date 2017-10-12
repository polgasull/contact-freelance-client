import { Component, OnInit } from '@angular/core';
import { FreelanceApiService } from '../../services/freelance-api.service'
import { environment } from '../../../environments/environment';
import { SessionService } from '../../services/session.service'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  userId: any = JSON.parse(localStorage.getItem('user'))._id
  user: any = {};

  constructor(private freelanceApi: FreelanceApiService, private session: SessionService) { }

  ngOnInit() {
    this.userId = 
    this.freelanceApi.getUser(this.userId)
      .subscribe((user) => {
        this.user = user;
        this.user.password = '';
      });
  }

  submitUpdates(myForm) {
    

    

    this.freelanceApi.editUserProfile(this.user)
      .subscribe((user) => {
      });
  }

}





