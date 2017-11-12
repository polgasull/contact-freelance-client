import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any = {
    email: '',
    password: ''
  }
  error = null;
  
  constructor(private session: SessionService,
    private router: Router) { }

  ngOnInit() {
  }

  submitLogin() {
    this.session.login(this.user)
    .subscribe(
      (data) => {
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        this.error = err
      }
    )
}

}
