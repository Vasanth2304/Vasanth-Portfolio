import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },  
    { path: 'experience', component: ExperienceComponent },  
];
