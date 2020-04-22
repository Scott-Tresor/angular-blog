import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './Component/error/error.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';



const ROUTING_PATH: Routes = [
    { path:'', component: DashboardComponent},
    { path:'contact', component: ContactComponent},
    { path: '**', component: ErrorComponent }
];

export const Route = RouterModule.forRoot(ROUTING_PATH);
