import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { Impots } from '../../models/api.model';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {

    data: Impots;
    constructor(private api: ApiService, private route: Router) { }

    ngOnInit(): void {
    }

    postImpot(formulaire)
    {
        this.api.addDeclaration(formulaire.value).subscribe(
            success=>{

            },
            error=>{

            }
        );
    }

}
