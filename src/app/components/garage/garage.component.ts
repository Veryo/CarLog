import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-garage',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,CommonModule,MatListModule,RouterLink],
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.scss'
})
export class GarageComponent {
  cars = [
    {  id: 1, name: 'Tesla Model S', image: 'https://storage.googleapis.com/pod_public/1300/121017.jpg' },
    {  id: 2, name: 'Ford Mustang', image: 'https://storage.googleapis.com/pod_public/1300/121017.jpg' },
    {  id: 3, name: 'Chevrolet Camaro', image: 'https://storage.googleapis.com/pod_public/1300/121017.jpg' },
    {  id: 4, name: 'BMW M3', image: 'https://storage.googleapis.com/pod_public/1300/121017.jpg' },
    {  id: 5, name: 'Audi R8', image: 'https://storage.googleapis.com/pod_public/1300/121017.jpg' }
  ];
}
