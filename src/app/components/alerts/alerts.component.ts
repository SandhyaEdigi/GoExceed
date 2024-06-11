import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
  constructor(private router:Router ){}
  isDarkMode:any;
  ngOnInit(): void {
    this.isDarkMode = localStorage.getItem('darkMode');
  }
  
  
}
