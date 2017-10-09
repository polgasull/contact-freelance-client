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
    return this.http.get(`${this.BASE_URL}/profile/${id}`, )
      .map((res) => res.json());
  }

  getPublicService(id) {
    return this.http.get(`${this.BASE_URL}/public-service/${id}`,)
    .map((res) => res.json());
  }

}
