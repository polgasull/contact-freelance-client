import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any = {
    username: '',
    password: '',
  }
  error = null;
  
  constructor() { }

  ngOnInit() {
  }

  submitLogin() {
    console.log(this.user);
  }

}
