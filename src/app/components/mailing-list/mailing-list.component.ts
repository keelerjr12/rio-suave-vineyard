import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MailingListService } from 'src/app/shared/mailing-list.service';

@Component({
  selector: 'rs-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.css']
})
export class MailingListComponent implements OnInit {

  subscriptionForm = new FormGroup({
    email: new FormControl('')
  });

  isSubscribed = false;

  constructor(private mailingListService: MailingListService) {
  }

  ngOnInit() {
    this.isSubscribed = localStorage.getItem('mailingListSubscribed') === 'true';
  }

  onSubscribe() {
    console.log(this.email.value);
    this.mailingListService.subscribe(this.email.value).subscribe(
      res => {
        this.markSubscribed();
      },
      err => {
        console.log('failed mailing list subscription');
      }
    );
  }

  markSubscribed(){
    localStorage.setItem('mailingListSubscribed', 'true');
    this.isSubscribed = true;
  }

  get email() { return this.subscriptionForm.get('email'); }
}
