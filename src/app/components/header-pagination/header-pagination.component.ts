import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-pagination.component.html',
  styleUrl: './header-pagination.component.css'
})
export class HeaderPaginationComponent {
  constructor(private router:Router ){}
  isDarkMode:boolean = false;
  darkMode(){
    this.isDarkMode = !this.isDarkMode
  }
  home(){
    this.router.navigate(['/']);
  }
}
