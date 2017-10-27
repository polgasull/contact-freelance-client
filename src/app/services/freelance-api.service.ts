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
    return this.http.get(`${this.BASE_URL}/api/services/${user}`, this.setOptionsApi())
    .map((res)=>res.json());
  }
  newService(service) {
    return this.http.post(`${this.BASE_URL}/api/service`, service, this.setOptionsApi())
      .map((res) => res.json());
  }
  updateService(service) {
    console.log('conect updtae')
    return this.http.put(`${this.BASE_URL}/api/service/${service._id}`, service, this.setOptionsApi())
      .map((res) => res.json());
  }
  removeService(serviceId) {
    return this.http.delete(`${this.BASE_URL}/api/service/${serviceId}`, this.setOptionsApi())
      .map((res) => res.json());
  }
  //get 1 service
  serviceDetails(service) {
    return this.http.get(`${this.BASE_URL}/api/service/${service}`, this.setOptionsApi())
      .map((res) => res.json());
  }
  //get sections user profile
  sectionsList(service) {
    return this.http.get(`${this.BASE_URL}/api/sections/${service}`, this.setOptionsApi())
      .map((res) => res.json());
  }
  newSection(section){
    return this.http.post(`${this.BASE_URL}/api/section`, section, this.setOptionsApi())
      .map((res)=> res.json());
  }
  updateSection(section){
    return this.http.put(`${this.BASE_URL}/api/section/${section._id}`, section, this.setOptionsApi())
      .map((res)=> res.json());
  }
  removeSection(sectionId){
    return this.http.delete(`${this.BASE_URL}/api/section/${sectionId}`, this.setOptionsApi())
      .map((res) => res.json());
  }
}


