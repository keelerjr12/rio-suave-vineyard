import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    comments: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    const name = this.contactForm.get('name');
    console.log(name.value);
  }
}
