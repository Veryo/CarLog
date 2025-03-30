import { Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { GarageComponent } from './components/garage/garage.component';
import { CurrentCarComponent } from './components/current-car/current-car.component';
import { GarageFormComponent } from './components/garage/garage-form/garage-form.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { InsuranceFormComponent } from './components/insurance/insurance-form/insurance-form.component';

export const routes: Routes = [
    {path:'',component:TestComponent},
    {path:'garage', component: GarageComponent},
    {path:'garage-form', component: GarageFormComponent},
    { path: 'garage-form/:carId', component: GarageFormComponent },
    {path:'insurance/:insuranceId/:carId', component: InsuranceComponent},
    {path:'insurance-form/:carId', component: InsuranceFormComponent},
    {path:'insurance-form/:insuranceId/:carId', component: InsuranceFormComponent},
    {path:'current-car/:carId', component: CurrentCarComponent}
];
