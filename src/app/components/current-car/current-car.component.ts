import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { Router, RouterLink } from '@angular/router';
import { Car } from '../../data/car';
@Component({
  selector: 'app-current-car',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatDividerModule,RouterLink],
  templateUrl: './current-car.component.html',
  styleUrl: './current-car.component.scss'
})
export class CurrentCarComponent {
  car = {
    id: 1,
    name: 'Lightning McQueen',
    model: 'Ka-Chow 5000',
    brand : "alfa",
    year: 2006, 
    mileage: 123456,
    vin: '1C4RJFBG9JC123456', 
    registration: 'RAC3CAR',
    horsePower: 750,
    engineCapacity: 5.7, 
    image: null,
    technicalInspectionDate: '2025-01-01',
    registrationCertificateNumber: 'DOC-95',
    insuranceEndDate: '2025-01-01'
  };

  constructor(private router: Router) {}

  editCar(car: Car) {
    this.router.navigate(['/edit-car', car]);
  }
}
