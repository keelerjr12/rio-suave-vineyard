import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'rs-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.css']
})
export class MailingListComponent {

  subscriptionForm = new FormGroup({
    email: new FormControl('')
  });

  isSubscribed = false;

  constructor() {
    this.isSubscribed = localStorage.getItem('mailingListSubscribed') === 'true';
  }

  onSubmit() {
    localStorage.setItem('mailingListSubscribed', 'true');
    this.isSubscribed = true;
  }
}
