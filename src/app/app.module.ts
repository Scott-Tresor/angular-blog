import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Route } from './app.routing';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HeaderComponent } from './Component/header/header.component';
import { ErrorComponent } from './Component/error/error.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DeclarationComponent } from './pages/declaration/declaration.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { HttpClientModule } from '@angular/common/http';
import { MapsComponent } from './pages/maps/maps.component';
import { DashComponent } from './Admin/dash/dash.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ErrorComponent,
    DashboardComponent,
    ContactComponent,
    DeclarationComponent,
    AboutComponent,
    FooterComponent,
    NewsletterComponent,
    MapsComponent,
    DashComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Route,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
