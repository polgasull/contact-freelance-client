import { Component, OnInit } from '@angular/core';
import { FreelanceApiService } from '../../services/freelance-api.service'
import { TagInputModule } from 'ngx-chips';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { SessionService } from '../../services/session.service';
import { HelpersService } from '../../services/helpers.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${environment.baseURL}/api/user/edit/userImage/${JSON.parse(localStorage.getItem('user'))._id}`,
    authToken: "Bearer " + this.session.token
  });
  uploaderBig: FileUploader = new FileUploader({
    url: `${environment.baseURL}/api/user/edit/bigImage/${JSON.parse(localStorage.getItem('user'))._id}`,
    authToken: "Bearer " + this.session.token
  });
  feedback: string;
  feedbackError: string;
  usersList: Array<any> = [];
  userId: any;
  user: any = {};
  newUser: any = {};
  bigImage: any;
  name: any;
  surname: any;

  constructor(private freelanceApi: FreelanceApiService, private session: SessionService, private helpers: HelpersService) { }

  ngOnInit() {
    this.user.klaim = ""
    this.userId = JSON.parse(localStorage.getItem('user'))._id
    this.name = this.user.name

    this.getUser(this.userId);

    this.uploader.onSuccessItem = (item, response) => {
      this.getUser(this.userId);
      this.feedback = JSON.parse(response).message;
    };
    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedbackError = JSON.parse(response).message;
    };
    this.uploaderBig.onSuccessItem = (item, response) => {
      this.getUser(this.userId);
      this.feedback = JSON.parse(response).message;
    };
    this.uploaderBig.onErrorItem = (item, response, status, headers) => {
      this.feedbackError = JSON.parse(response).message;
    };
  }

  getUser(id) {
    this.freelanceApi.getUser(id)
      .subscribe((user) => {
        this.user = user;
        if (!this.user.klaim) {
          this.user.klaim = '';
        }
      });
  }

  handleMapEvent(place) {
    console.log("Emit sended:", place)
      this.user.city = place 
    }

  submitUpdates(myForm) {
    this.helpers.convertToUrl(this.user.name, this.user.surname, (string) => {
      this.user.url = string;
      this.uploader.onBuildItemForm = (item, form) => {
        item.withCredentials = false;
      };

      this.uploader.uploadAll();

      this.uploaderBig.onBuildItemForm = (item, form) => {
        item.withCredentials = false;
      };

      this.uploaderBig.uploadAll();

      this.freelanceApi.editUserProfile(this.user)
        .subscribe((user) => {
          this.getUser(this.userId);
          this.feedback = 'saved';
        });
    })

  }

}



