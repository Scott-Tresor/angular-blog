import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { Route } from './app.routing';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HeaderComponent } from './Component/header/header.component';
import { ErrorComponent } from './Component/error/error.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DeclarationComponent } from './pages/declaration/declaration.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './Component/footer/footer.component';
=======
>>>>>>> 4976ba43adc22584de507f92c9f3f7fbeebcc638
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
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    Route
=======

>>>>>>> 4976ba43adc22584de507f92c9f3f7fbeebcc638
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
