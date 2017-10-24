import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class FreelancePublicService {

  BASE_URL: string = environment.baseURL
  constructor(private http: Http) {
  }

  getUserProfile(url) {
    return this.http.get(`${this.BASE_URL}/public-profile/${url}`, )
      .map((res) => res.json());
  }

  getPublicService(id) {
    return this.http.get(`${this.BASE_URL}/public-profile-service/${id}`, )
      .map((res) => res.json());
  }

  getServiceProfile(url) {
    return this.http.get(`${this.BASE_URL}/public-service/${url}`, )
      .map((res) => res.json());
  }

  getSectionProfile(url) {
    return this.http.get(`${this.BASE_URL}/public-section/${url}`,)
    .map((res) => res.json());
  }
  sendNewContact(contact){
    return this.http.post(`${this.BASE_URL}/send`, contact )
      .map((res)=> res.json());
  }

    // search how many users match with the query
    searchUserList(query) {
      return this.http.get(`${this.BASE_URL}/search-user/${query}`,)
      .map((res) => res.json());
    }
  

}
