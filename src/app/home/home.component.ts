import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ProjectsComponent } from '../projects/projects.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, FooterComponent, ProjectsComponent, AboutComponent, ExperienceComponent]
})
export class HomeComponent {

    openResume() {
        window.open('./assets/Vasanth_CV.pdf', '_blank');
      }
    
      goToLink(url: string) {
        window.location.href = url;
      }
}
