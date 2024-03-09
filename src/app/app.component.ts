import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ClrLayoutModule } from '@clr/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClrLayoutModule, CommonModule, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private router: Router) {
    const route = localStorage.getItem('route');

    if (route) {
      localStorage.removeItem('route');
      this.router.navigate([route]);
    }
  }

}
