import { Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { GarageComponent } from './components/garage/garage.component';
import { CurrentCarComponent } from './components/current-car/current-car.component';
import { GarageFormComponent } from './components/garage/garage-form/garage-form.component';

export const routes: Routes = [
    {path:'',component:TestComponent},
    {path:'garage', component: GarageComponent},
    {path:'garage/form', component: GarageFormComponent},
    {path:'currentCar/:id', component: CurrentCarComponent}
];
