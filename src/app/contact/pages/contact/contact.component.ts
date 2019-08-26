import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../shared/contact.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comments: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.name.value + ' (' + this.email.value + ')\n' + this.comments.value);

    this.contactService.send(this.name.value, this.email.value, this.comments.value).subscribe(
      data => {
        // Page redirect when getting response
        this.router.navigate(['/home']);
      }
    );
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get comments() { return this.contactForm.get('comments'); }
}
