import { Component, OnInit, Input } from '@angular/core';
import { FreelancePublicService } from '../../../services/freelance-public.service'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() contact:any;
  
  loading: boolean = false;
  feedback: string;
  feedbackError: string;

  constructor(
    private freelancePublic: FreelancePublicService
  ) { }

  ngOnInit() {
  }

  send() {
    this.loading = true;
    this.contact = {
      name: this.contact.name,
      tel: this.contact.tel,
      message: this.contact.message,
      email: this.contact.email,
      userEmail: this.contact.userEmail,
      origin: this.contact.origin,
      user: this.contact.user,
      service: this.contact.service
    }

    this.freelancePublic.sendNewContact(this.contact)
      .subscribe(
      (contact) => {
        this.loading = false;
        this.feedback = 'Message send';
      },
      (err) => {
        this.feedbackError = err;
      }
      );
  }

}
