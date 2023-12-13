import { Routes } from '@angular/router';

import { StartComponent } from './pages/start/start.component';
import { GotyComponent } from './pages/goty/goty.component';

export const routes: Routes = [
    { path:'home', component: StartComponent },
    { path:'goty', component: GotyComponent },
    { path:'**', pathMatch:'full', redirectTo: 'home' }
];
