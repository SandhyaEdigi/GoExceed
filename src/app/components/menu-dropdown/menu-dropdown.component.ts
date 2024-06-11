import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-dropdown.component.html',
  styleUrl: './menu-dropdown.component.css'
})
export class MenuDropdownComponent {
  menuList:any =[
    {id:1,title:"Table fillers",selected:false},
    {id:2,title:"Table fillers",selected:false},
    {id:3,title:"Table fillers",selected:false},
    {id:4,title:"Table fillers",selected:false},
    {id:5,title:"Table fillers",selected:false},
  ]
  menuList2:any =[
    {id:10,title:"Table fillers",selected:false},
    {id:11,title:"Table fillers",selected:false},
    {id:12,title:"Table fillers",selected:false},
    {id:13,title:"Table fillers",selected:false},
    {id:14,title:"Table fillers",selected:false},
  ]
  constructor(private router:Router ){}
  isDarkMode:boolean = false;
  darkMode(){
    this.isDarkMode = !this.isDarkMode
  }
  home(){
    this.router.navigate(['/']);
  }
  itemSelect(item:any){
    item.selected = !item.selected;
  }
}
