import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordions.component.html',
  styleUrl: './accordions.component.css'
})
export class AccordionsComponent {
  constructor(private router:Router ){}
  isDarkMode:boolean = false;
  darkMode(){
    this.isDarkMode = !this.isDarkMode
  }
  home(){
    this.router.navigate(['/']);
  }
}
