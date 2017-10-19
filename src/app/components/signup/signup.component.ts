import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { HelpersService } from '../../services/helpers.service';

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
    surname: '',
    url: '',
  }

  error = null;

  constructor(private session: SessionService, private router: Router, private helpers: HelpersService) { }

  ngOnInit() {
 
  }

  submitSignup(myForm) {
    this.user.url = this.helpers.convertToUrl(this.user.name, this.user.surname)
    
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
