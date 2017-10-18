import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any = {
    email: '',
    password: '',
    name: '',
    surname: ''
  }

  error = null;

  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
 
  }

  submitSignup(myForm) {
    // llamar aqui el helper para hacer encodeURI y hacer el console.log

    this.session.signup(this.user)
      .subscribe(
      (data) => {
        this.router.navigate(['/profile']);
      },
      (err) => {
        this.error = err
      }
      )
  }
  
  

}
