import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-fields',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './input-fields.component.html',
  styleUrl: './input-fields.component.css'
})
export class InputFieldsComponent {
  constructor(private router:Router ){}
  isDarkMode:boolean = false;
  darkMode(){
    this.isDarkMode = !this.isDarkMode
  }
  home(){
    this.router.navigate(['/']);
  }
}
