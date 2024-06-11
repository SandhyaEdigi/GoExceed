import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'GoExceed-DesignSystem-Angular';
  tokensData:any;
  constructor(private router:Router) {}
  ngOnInit(): void {
    localStorage.setItem('darkMode', 'false')
  }
  isDarkMode:boolean = false;
  darkMode(){
    this.isDarkMode = !this.isDarkMode;
    
    if(this.isDarkMode){
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        localStorage.setItem('darkMode', 'true')
        
    }else{
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('darkMode', 'false')
    }
  }
  home(){
    this.router.navigate(['/']);
  }
}
