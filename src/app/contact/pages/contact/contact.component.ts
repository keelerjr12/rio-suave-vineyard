import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../shared/contact.service';
import { IContactDetails } from '../../shared/IContactDetails';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router, private contactService: ContactService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmitted(contactDetails: IContactDetails) {
    console.log(contactDetails);

    this.contactService.send(contactDetails.name, contactDetails.email, contactDetails.comments).subscribe(
      res => {
        this.toastr.success('We have received your message!', 'Thank You!', {
          positionClass: 'toast-bottom-center',
        });

        this.router.navigate(['/home']);
      }
    );
  }
}
