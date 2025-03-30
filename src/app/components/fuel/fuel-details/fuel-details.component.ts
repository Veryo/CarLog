import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fuel-details',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,RouterLink],
  templateUrl: './fuel-details.component.html',
  styleUrl: './fuel-details.component.scss'
})
export class FuelDetailsComponent {
  fuelDetails =   {
    fuelId :1,
    name: "Trip 1",
    startingPoint: "Krakow",
    destination: "Warsaw",
    distance: 300,
    fuelConsumption: 7.5,
    petrolPrice: 5.5,
    totalCost: (300 / 100) * 7.5 * 5.5
  }
}
