import { Component, OnInit } from '@angular/core';
import Parallax from 'parallax-js'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    card = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
