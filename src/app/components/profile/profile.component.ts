import { Component, OnInit } from '@angular/core';
import { FreelanceApiService } from '../../services/freelance-api.service'
import { TagInputModule } from 'ngx-chips';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { SessionService } from '../../services/session.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${environment.baseURL}/api/user/edit/${JSON.parse(localStorage.getItem('user'))._id}`,
    authToken: "Bearer " + this.session.token

  });

  feedback: string;
  usersList: Array<any> = [];
  
  userId:any;
  user :any = {
  };
  newUser: any = {
  };
  bigImage : any;
 

  constructor(private freelanceApi: FreelanceApiService, private session: SessionService) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('user'))._id
    console.log('init',this.userId)
    this.freelanceApi.getUser(this.userId)
    .subscribe((user) => {
      this.user = user;        
    });

    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
      
    };
  }

  submitUpdates(myForm) {
    this.uploader.onBuildItemForm = (item, form) => {
      console.log('item',this.bigImage, form, item, myForm)
      item.withCredentials = false;
    };

    this.uploader.uploadAll();
  
    this.freelanceApi.editUserProfile(this.user)
    .subscribe((user)=>{
    });
  }

}



