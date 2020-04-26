import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/api.model';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    username: string;
    email:string;
    phones: number;
    content:string;
    constructor() { }

    ngOnInit(): void {
    }

    envoyer()
    {
      console.log(this.username);
    }

}
