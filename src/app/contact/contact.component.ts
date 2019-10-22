import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Contact } from '../models/contact.model'
import {ContactService} from '../services/contact.service';
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    inputs: ['contact']
})

export class ContactComponent implements OnInit{

    isFavorite: boolean = false;
    @Input () contact: Contact;
    @Input() index: number;
    @Output() onUpdate: EventEmitter<any> = new EventEmitter();

    constructor(private service: ContactService) { }

    ngOnInit(){
        
    }

    onClick(): void{
        console.log('Button Clicked. Status van favorite is:' + this.isFavorite);
    }

    toggleFavorite(index: number): void {
        this.service.toggleFavorite(index);
        this.onUpdate.emit();
    }

}
