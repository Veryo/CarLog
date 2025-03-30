import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-garage-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,CommonModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './garage-form.component.html',
  styleUrl: './garage-form.component.scss'
})
export class GarageFormComponent {
  carId!: number | null;
  carForm!: FormGroup;
  constructor(private route: ActivatedRoute,private fb: FormBuilder) {}

  ngOnInit() {
    this.carId = this.route.snapshot.paramMap.get('carId') ? +this.route.snapshot.paramMap.get('carId')! : null;
    this.carForm = this.fb.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1886), Validators.max(new Date().getFullYear())]], 
      mileage: ['', [Validators.required, Validators.min(0)]],
      vin: ['', [Validators.required, Validators.minLength(17), Validators.maxLength(17)]], 
      registration: ['', Validators.required],
      horsePower: ['', [Validators.required, Validators.min(1)]],
      engineCapacity: ['', [Validators.required, Validators.min(0.1)]],
      image: [null], 
      technicalInspectionDate: ['', Validators.required],
      registrationCertificateNumber: ['', Validators.required]
    });
    console.log(this.carId);
  }

  onSubmit() {
    if (this.carForm.valid) {
      console.log('Car Data:', this.carForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.carForm.patchValue({ image: file });
      this.carForm.get('image')?.updateValueAndValidity();
    }
  }
}
