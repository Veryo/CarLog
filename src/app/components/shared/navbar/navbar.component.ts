import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterLink],
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
  navigateToInsurance() {
    const currentUrl = window.location.pathname;
    const carId = currentUrl.split('/')[2];  
    const insuranceId = 1
    this.router.navigate(['/insurance/', insuranceId,carId]);
  }

  navigateToCurrentCar() {
    const currentUrl = window.location.pathname;
    const carId = currentUrl.split('/')[3];  
    this.router.navigate(['/current-car', carId]);
  }
}
