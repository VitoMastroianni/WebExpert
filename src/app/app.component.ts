import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';
import { ContactService } from './services/contact.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contactList: Contact[];
  onlyFavorites: boolean = false;

  constructor(private service: ContactService) { }

  ngOnInit(): void {
  }

  handleData(event: Contact){
    console.log('Recieved data!', event);
  }





}
