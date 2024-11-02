import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class AboutComponent {
    
    constructor(private router: Router) {}

    navigateToExperience() {
      this.router.navigate(['/experience']);
    }
}
