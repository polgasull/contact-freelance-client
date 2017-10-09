import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { SessionService } from './session.service'

@Injectable()
export class FreelanceApiService {

  BASE_URL: string = environment.baseURL
  constructor(private http: Http, private session: SessionService) {
  }

  setOptionsApi() {
    let headers = new Headers({'Authorization': 'Bearer ' + this.session.token });
    return new RequestOptions({ headers });
  }

  getUserList() {
    return this.http.get(`${this.BASE_URL}/api/users`, this.setOptionsApi())
    .map((res) => res.json());
  }
  //get user from your :id
  getUser(id) {
    return this.http.get(`${this.BASE_URL}/api/user/${id}`, this.setOptionsApi())
      .map((res) => res.json());
  }
  //put update user profile
  editUserProfile(user){    
    return this.http.put(`${this.BASE_URL}/api/user/${user._id}`, user, this.setOptionsApi())
      .map((res)=> res.json());
  }
  //get services user profile
  servicesList(user){
    return this.http.get(`${this.BASE_URL}/api/service/${user}`, this.setOptionsApi())
    .map((res)=>res.json());
  }
  //get sections user profile
  sectionsList(user) {
    return this.http.get(`${this.BASE_URL}/api/sections/${user}`, this.setOptionsApi())
      .map((res) => res.json());
  }

}


