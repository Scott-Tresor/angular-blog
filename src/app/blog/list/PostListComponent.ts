import { Component, Inject, OnInit } from "@angular/core";

@Component({
    selector: 'app-post-list',
    templateUrl: './postList.html'
})

export class PostListComponent implements OnInit{
    public postList = postList;
    constructor(){}

    ngOnInit(): void {
        
    }
}

const postList =[
    {
        name: "scott",
        subname: "ddef",
        imageTarget:"https://material.angular.io/assets/img/examples/shiba2.jpg",
        content: "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
    },
    {
        name: "scott 1",
        subname: "ddef 1",
        imageTarget:"https://material.angular.io/assets/img/examples/shiba2.jpg",
        content: "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
    },
    {
        name: "scott 2",
        subname: "ddef 2",
        imageTarget:"https://material.angular.io/assets/img/examples/shiba2.jpg",
        content: "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
    },
    {
        name: "scott 3",
        subname: "ddef 3",
        imageTarget:"https://material.angular.io/assets/img/examples/shiba2.jpg",
        content: "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
    },
];