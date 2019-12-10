import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Contact } from '../models/contact.model';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;
  @Input() contact: Contact;

 ngOnInit() {
   this.form = new FormGroup({
     'name': new FormControl(this.contact ? this.contact.name : null,
       [Validators.required, Validators.minLength(3)]),
     'email': new FormControl(this.contact ? this.contact.email : null,
       [Validators.required, Validators.pattern(/^[a-z0-9_\.]+@[a-z0-9_\.]+/i)]),
     'phone': new FormControl(this.contact ? this.contact.phone : null,
       [Validators.required, Validators.minLength(9)]),
     'isFavorite': new FormControl(this.contact ? this.contact.isFavorite : false),
     'avatar': new FormControl(this.contact ? this.contact.avatar : null)
   });
 }
}
