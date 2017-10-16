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
    console.log('entra', id)
    return this.http.get(`${this.BASE_URL}/public-profile-service/${id}`, )
      .map((res) => res.json());
  }

  getPublicSection(id) {
    console.log('section or user id?', id)
    return this.http.get(`${this.BASE_URL}/public-profile-section/${id}`, )
      .map((res) => res.json());
  }

  getServiceProfile(id) {
    return this.http.get(`${this.BASE_URL}/public-service/${id}`, )
      .map((res) => res.json());
  }

  getSectionProfile(id) {
    return this.http.get(`${this.BASE_URL}/public-section/${id}`,)
    .map((res) => res.json());
  }
}
