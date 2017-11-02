import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService implements CanActivate {
  public token: String = '';
  public isAuth:  boolean = false;
  public user = {};
  
  private BASE_URL: String = 'http://localhost:3000'
  
  constructor(
    private http: Http,
    private router: Router
  ) { }

canActivate() {
  if (localStorage.getItem('token')) {
    const headers = new Headers({ 'Authorization': 'Bearer' + localStorage.getItem('token') });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/token`, options)
      .toPromise()
      .then((res) => res.json())
      .then((data) => {
        this.isAuth = true;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.token = localStorage.getItem('token');
        return true;
      })
      .catch((err) => {
        // this.logout()
        this.router.navigate(['/login'])
        return false;    
      })

  }else{
    // this.logout()
    this.router.navigate(['/login'])
    return false;
  }
}

login(user) {
  return this.http.post(`${this.BASE_URL}/login`, user)
    .map((res) => res.json())
    .map((res) => {
      const { token, user } = res
      console.log('token', token)
      if (token) {
        this.token = token;
        this.user = {
          _id: user._id,
          email: user.email
        }
        this.isAuth = true;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(this.user));
        
        return true;
      } else {
        return false;
      }
    })
}

}