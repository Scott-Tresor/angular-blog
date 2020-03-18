import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogModule } from './blog/BlogModul';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
