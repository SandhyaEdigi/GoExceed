import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-components-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './components-list.component.html',
  styleUrl: './components-list.component.css'
})
export class ComponentsListComponent {
  constructor(private router: Router,) {}

}
