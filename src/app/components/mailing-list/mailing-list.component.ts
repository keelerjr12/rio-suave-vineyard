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

    this.mailingListService.subscribe(this.email.value).subscribe(
      res => {
        this.toastr.success('You have subscribed!', 'Success', {
          positionClass: 'toast-bottom-center',
        });
      },
      err => {
        console.log('failed mailing list subscription');
      }
    );
  }

  get email() { return this.subscriptionForm.get('email'); }
}
