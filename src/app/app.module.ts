import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Application/navbar/navbar.component';
import { FooterComponent } from './Application/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
