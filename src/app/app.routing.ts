import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './Component/error/error.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { DeclarationComponent } from './pages/declaration/declaration.component';



const ROUTING_PATH: Routes = [
    { path:'', component: DashboardComponent, pathMatch:"full"},
    { path:'contact', component: ContactComponent, pathMatch:"full"},
    { path:'about', component: AboutComponent, pathMatch:"full"},
    { path:'declaration', component: DeclarationComponent, pathMatch:"full"},
    { path: '**', component: ErrorComponent, pathMatch:"full"},
];

export const Route = RouterModule.forRoot(ROUTING_PATH);
