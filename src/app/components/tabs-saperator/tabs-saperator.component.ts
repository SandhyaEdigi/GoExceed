import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs-saperator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs-saperator.component.html',
  styleUrl: './tabs-saperator.component.css'
})
export class TabsSaperatorComponent {
  constructor(private router:Router ){}
  isDarkMode:boolean = false;
  darkMode(){
    this.isDarkMode = !this.isDarkMode
  }
  home(){
    this.router.navigate(['/']);
  }
}
