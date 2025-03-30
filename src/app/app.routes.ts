import { Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { GarageComponent } from './components/garage/garage.component';
import { CurrentCarComponent } from './components/current-car/current-car.component';
import { GarageFormComponent } from './components/garage/garage-form/garage-form.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { InsuranceFormComponent } from './components/insurance/insurance-form/insurance-form.component';
import { FuelComponent } from './components/fuel/fuel.component';
import { FuelDetailsComponent } from './components/fuel/fuel-details/fuel-details.component';
import { FuelFormComponent } from './components/fuel/fuel-form/fuel-form.component';

export const routes: Routes = [
    {path:'',component:TestComponent},
    {path:'garage', component: GarageComponent},
    {path:'garage-form', component: GarageFormComponent},
    { path: 'garage-form/:carId', component: GarageFormComponent },
    {path:'insurance/:insuranceId/:carId', component: InsuranceComponent},
    {path:'insurance-form/:carId', component: InsuranceFormComponent},
    {path:'insurance-form/:insuranceId/:carId', component: InsuranceFormComponent},
    {path:'fuel/:carId', component: FuelComponent},
    {path:'fuel-details/:fuelId', component: FuelDetailsComponent},
    {path:'fuel-form', component: FuelFormComponent},
    {path:'fuel-form/:fuelId', component: FuelFormComponent},
    {path:'current-car/:carId', component: CurrentCarComponent}
];
