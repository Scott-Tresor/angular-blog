import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/api.model';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contact: Contact[];

    constructor() { }

    ngOnInit(): void {
    }

    ajouter()
    {

    }

}
