import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class FreelancePublicService {

  BASE_URL: string = environment.baseURL
  constructor(private http: Http) {
  }

  getUserProfile(id) {
    return this.http.get(`${this.BASE_URL}/public-profile/${id}`, )
      .map((res) => res.json());
  }

  getPublicService(id) {
    return this.http.get(`${this.BASE_URL}/public-profile-service/${id}`, )
      .map((res) => res.json());
  }

  getServiceProfile(id) {
    return this.http.get(`${this.BASE_URL}/public-service/${id}`, )
      .map((res) => res.json());
  }

  sendNewContact(contact){
    return this.http.post(`${this.BASE_URL}/send`, contact )
      .map((res)=> res.json());
  }

}
