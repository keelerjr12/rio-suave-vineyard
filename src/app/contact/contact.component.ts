import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    const name = this.contactForm.get('name');
    console.log(name.value);
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get comments() { return this.contactForm.get('comments'); }
}
