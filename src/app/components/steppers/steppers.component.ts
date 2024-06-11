import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-steppers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './steppers.component.html',
  styleUrl: './steppers.component.css'
})
export class SteppersComponent {
  constructor(private router:Router ){}
  isDarkMode:boolean = false;
  darkMode(){
    this.isDarkMode = !this.isDarkMode
  }
  home(){
    this.router.navigate(['/']);
  }
}
