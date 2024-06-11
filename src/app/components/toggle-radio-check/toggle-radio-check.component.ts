import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toggle-radio-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-radio-check.component.html',
  styleUrl: './toggle-radio-check.component.css'
})
export class ToggleRadioCheckComponent {
  constructor(private router:Router ){}
  isDarkMode:boolean = false;
  darkMode(){
    this.isDarkMode = !this.isDarkMode
  }
  home(){
    this.router.navigate(['/']);
  }
}
