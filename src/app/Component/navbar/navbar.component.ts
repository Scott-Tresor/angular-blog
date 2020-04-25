import { Component, OnInit, HostListener, Inject} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

    visibility = false;
    constructor() { }

    ngOnInit(): void {
    }
}
