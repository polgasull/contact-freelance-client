import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { SessionService } from './session.service'

@Injectable()
export class FreelanceApiService {

  BASE_URL: string = environment.baseURL
  constructor(private http: Http, private session: SessionService) {
    console.log(this.BASE_URL)
  }

  setOptionsApi() {
    let headers = new Headers({'Authorization': 'Bearer ' + this.session.token });
    return new RequestOptions({headers: headers});
  }

  getUserList() {
    return this.http.get(`${this.BASE_URL}/api/users`, this.setOptionsApi())
    .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/user/${id}`, this.setOptionsApi())
      .map((res) => res.json());
  }
}


