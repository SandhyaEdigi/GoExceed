import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.css'
})
export class BadgesComponent {
  constructor(private router:Router ){}
  isDarkMode:any;
  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('darkMode');
  }
  
}
