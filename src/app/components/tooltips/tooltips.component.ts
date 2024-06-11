import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [TooltipModule,CommonModule],
  templateUrl: './tooltips.component.html',
  styleUrl: './tooltips.component.css'
})
export class TooltipsComponent {
  constructor(private router:Router ){}
  isDarkMode:boolean = false;
  darkMode(){
    this.isDarkMode = !this.isDarkMode;
  }
  home(){
    this.router.navigate(['/']);
  }
}
