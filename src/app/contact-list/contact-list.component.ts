import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList: Contact[];
  onlyFavorites: boolean = false;

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.fetchContactList(this.onlyFavorites);
  }

  fetchContactList(onlyFavorites: boolean): void {
    this.service.getContactList(onlyFavorites).subscribe(data => {
      this.contactList = data;
    });
  }

  toggleView(onlyFavorites: boolean): void {
    this.onlyFavorites = !onlyFavorites;
    this.fetchContactList(this.onlyFavorites);
  }

  handleUpdate(): void {
    this.fetchContactList(this.onlyFavorites);
  }

}
