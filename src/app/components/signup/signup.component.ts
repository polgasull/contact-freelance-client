import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any = {
    email: '',
    password: '',
    name: '', 
    surname: ''
  }

  error = null;

  constructor() { }

  ngOnInit() {
  }

  submitSignup(myForm) {
    console.log(myForm)
  }

}
