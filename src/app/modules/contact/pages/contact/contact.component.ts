import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../shared/contact.service';
import { IContactDetails } from '../../shared/IContactDetails';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit() {
  }

  onSubmitted(contactDetails: IContactDetails) {
    console.log(contactDetails);

    this.contactService.send(contactDetails.name, contactDetails.email, contactDetails.comments).subscribe(
      data => {
        this.router.navigate(['/home']);
      }
    );
  }
}
