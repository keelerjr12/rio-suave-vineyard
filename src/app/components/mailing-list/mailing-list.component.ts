import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MailingListService } from 'src/app/modules/shared/services/mailing-list.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toastr: ToastrService, private mailingListService: MailingListService) {
  }

  ngOnInit() {

  }

  onSubscribe() {
    const email = this.email.value;
    this.subscriptionForm.disable();

    this.mailingListService.subscribe(email).subscribe(
      res => {
        this.toastr.success('You have subscribed!', 'Success', {
          positionClass: 'toast-bottom-center',
        });
      },
      err => {
        this.toastr.error('Unable to subscribe you to the mailing list', 'Failure', {
          positionClass: 'toast-bottom-center',
        });
      }
    );

    this.subscriptionForm.reset();
    this.subscriptionForm.enable();
  }

  get email() { return this.subscriptionForm.get('email'); }
}
