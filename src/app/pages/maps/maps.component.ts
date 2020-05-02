import { Component,  AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements AfterViewInit {
    map;
    constructor() { }

    create()
    {
        let drhkat = {
            Lat: 239.384,
            Long: 34394.44434
        };

        let zoomLevel = 12;
        this.map = L.map('map', {
            center: [drhkat.Lat, drhkat.Long],
            zoom: zoomLevel
        });

        let  mainLeyer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 12,
            maxZoom: 17,
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    ngAfterViewInit(): void {
        this.create();
    }

}
