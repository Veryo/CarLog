import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insurance-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,CommonModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './insurance-form.component.html',
  styleUrl: './insurance-form.component.scss'
})
export class InsuranceFormComponent {
  insuranceForm!: FormGroup;
  insuranceId! :  number | null
  constructor(private fb: FormBuilder,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.insuranceId = this.route.snapshot.paramMap.get('carId') ? +this.route.snapshot.paramMap.get('insuranceId')! : null;
    this.insuranceForm = this.fb.group({
      insurer: ['', Validators.required],
      type_of_insurance: ['', Validators.required],
      service: ['', Validators.required],
      policy_number: ['', Validators.required],
      date_of_contract_conclusion: ['', Validators.required],
      start_of_insurance: ['', Validators.required],
      end_of_insurance: ['', Validators.required],
      phone_number_to_call: ['', [Validators.required, Validators.pattern('^[0-9]{2} [0-9]{3} [0-9]{3} [0-9]{3}$')]],
    });
  }

  onSubmit() {
    if (this.insuranceForm.valid) {
      console.log(this.insuranceForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  
}
