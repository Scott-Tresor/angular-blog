import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import sweetAlert from 'sweetalert2';
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
    constructor(private apiservice: ApiService, private route: Router) { }

    ngOnInit(): void {
    }

    envoyer(formulaire)
    {
        this.apiservice.addContact(formulaire.value).subscribe(
            success=>{
                this.route.navigate(['/contact']);
                sweetAlert.fire('success', 'Probleme de connexion a votre server', 'success');
                console.log(success);
            },
            error=>{
                const Toast = sweetAlert.mixin({
                    toast: true,
                    position: 'top-end',
                    timer: 3000,
                    timerProgressBar: true,
                })
                Toast.fire('Error', 'Probleme de connexion a votre server', 'warning')
                console.log(error);
            }
        );
    }

}
