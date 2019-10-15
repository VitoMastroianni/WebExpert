import { Component, OnInit, Input } from '@angular/core'
import { Contact } from '../models/contact.model'
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    inputs: ['contact']
})

export class ContactComponent implements OnInit{

    isFavorite: boolean = false;
    @Input () contact: Contact;
   

    ngOnInit(){
        
    }

    onClick(): void{
        console.log('Button Clicked. Status van favorite is:' + this.isFavorite);
    }
}
