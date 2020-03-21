import { NgModule } from '@angular/core';
import { PostListComponent } from './PostListComponent'
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from '@angular/common';
@NgModule({
    imports:[
        CommonModule,
        MatCardModule,
    ],
    exports:[
        PostListComponent
    ],
    declarations:[
        PostListComponent
    ],
    providers:[]
})

export class PostListModule{}