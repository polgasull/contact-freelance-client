import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class SessionService implements CanActivate {
  public token: string = '';
  public isAuth:  boolean = false;
  public user = {};
  public userLogged:boolean = false; 
  
  private BASE_URL: String = 'http://localhost:3000'
  
  constructor(
    private http: Http,
    private router: Router
  ) { }
// ifIsLogged(){
//   if(localStorage.getItem('token')
// }
canActivate() {
  if (localStorage.getItem('token')) {
    
    const headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
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
      if (token) {
        this.token = token;
        this.user = {
          _id: user._id,
          email: user.email
        }
        this.isAuth = true;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log('isauth', this.isAuth)

        return true;
      } else {
        return false;
      }
    })
}

signup(user) {
  return this.http.post(`${this.BASE_URL}/user`, user)
    .map((res) => res.json())
    .map((res) => {
      const { token, user } = res
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

logout() {
  this.isAuth = false;

  localStorage.removeItem('user');
  localStorage.removeItem('token');
  this.router.navigate(['/dashboard']);
}

}