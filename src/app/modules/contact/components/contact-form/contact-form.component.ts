import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { IContactDetails } from '../../shared/IContactDetails';

@Component({
  selector: 'rs-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comments: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  @Output() submitted = new EventEmitter<IContactDetails>();

  constructor() { }

  submitForm() {
    const contactDetails = {
      name: this.name.value,
      email: this.email.value,
      comments: this.comments.value
    };

    this.submitted.emit(contactDetails);
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get comments() { return this.contactForm.get('comments'); }
}
