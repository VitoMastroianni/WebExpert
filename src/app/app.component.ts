import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactList: Contact[] = [
    new Contact('Jane Doe', 'jane.doe@mail.com', '0113448239', true , 'assets/avatar.png'),
    new Contact('John Doe', 'john.doe@mail.com', '011424839', true , 'assets/avatar.png'),
    new Contact('Vito Mastroianni', '11400996@student.pxl.be', '123456789', true , 'assets/avatar.png')
  ];

  ngOnInit(): void {
   // this.myContact = new Contact ('John Doe', 'john.doe@gmail.com',
   //'01166424893',true,'assets/avatar.png');
  }

  handleData(event: Contact){
    console.log('Recieved data!', event);
  }

  createContact(event: Contact) {
    this.contactList.push(event);
  }

}
