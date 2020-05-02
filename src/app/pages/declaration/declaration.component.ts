import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { Impots } from '../../models/api.model';
import sweetAlert from 'sweetalert2';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {

    name: string;
    data: Impots;
    constructor(private api: ApiService, private route: Router) { }

    ngOnInit(): void {
    }

    postImpot(formulaire)
    {
        this.api.addDeclaration(formulaire.value).subscribe(
            success=>{
                console.log(success);

            },
            error=>{
                sweetAlert.fire('Error', 'Probleme de connexion a votre server', 'warning')
                console.error(error);
            }
        );
    }

}
