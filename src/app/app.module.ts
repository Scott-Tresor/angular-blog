import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Route } from './app.routing';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HeaderComponent } from './Component/header/header.component';
import { ErrorComponent } from './Component/error/error.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ErrorComponent,
    DashboardComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    Route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
