import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactModule { }
