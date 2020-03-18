import { NgModule } from '@angular/core';
import { PostService } from './services/PostService';
import { PostRessource } from './services/PostRessource';
import { PostListModule } from './list/PostListModule';

@NgModule({
    imports:[
        PostListModule,
    ],
    exports:[],
    declarations:[],
    providers:[
        PostService,
        PostRessource,
    ]
})

export class BlogModule{}