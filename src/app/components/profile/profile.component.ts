import { Component, OnInit } from '@angular/core';
import { FreelanceApiService } from '../../services/freelance-api.service'
import { TagInputModule } from 'ng2-tag-input';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usersList: Array<any> = [];
  
  userId:any;
  user :any = {
  };
 

  constructor(private freelanceApi: FreelanceApiService) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('user'))._id
    
    this.freelanceApi.getUser(this.userId)
    .subscribe((user) => {
      this.user = user;        
    });
  }

  submitUpdates(myForm) {
    this.freelanceApi.editUserProfile(this.user)
    .subscribe((user)=>{
      
      
    })
  }

  

 
}



