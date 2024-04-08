import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  players: string[] = ['', '', '', '', '', '', '', '', '', '', ''];

  generateTeams() {
    console.log("A");
    const combinations = [];
    console.log("B");
    for (let i = 0; i < this.players.length; i++) {
      for (let j = 0; j < this.players.length; j++) {
        if (i !== j) {
          combinations.push({ captain: this.players[i], viceCaptain: this.players[j] });
        }
      }
    }
    console.log(combinations); // Displaying in console, you can modify to display on UI
  }
}
