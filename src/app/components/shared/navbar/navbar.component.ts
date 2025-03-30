import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDisabled = false;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isDisabled = this.router.url === '/garage-form' ||
      this.router.url === '/garage' ;
    });
  }
  navigateToGarage() {
    this.router.navigate(['/garage']);
  }
}
