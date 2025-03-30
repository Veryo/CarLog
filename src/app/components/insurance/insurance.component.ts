import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-insurance',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,RouterLink],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.scss'
})
export class InsuranceComponent {
  insurance = {
    insuranceId:1,
    insurer: "ABC Insurance Co.",
    type_of_insurance: "Car Insurance",
    service: "Comprehensive Coverage",
    policy_number: "A123-4567-XYZ",
    date_of_contract_conclusion: "2024-03-01",
    start_of_insurance: "2024-03-05",
    end_of_insurance: "2025-03-05",
    phone_number_to_call: "+48 123 456 789"
  }
  carId!: string;

  ngOnInit(){
    const currentUrl = window.location.pathname;
    this.carId = currentUrl.split('/')[3];  
  }

}
