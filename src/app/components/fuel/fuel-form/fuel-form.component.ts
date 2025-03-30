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
  selector: 'app-fuel-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,CommonModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './fuel-form.component.html',
  styleUrl: './fuel-form.component.scss'
})
export class FuelFormComponent {
  fuelForm!: FormGroup;
  fuelId!: number | null;
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.fuelId = this.route.snapshot.paramMap.get('fuelId') ? +this.route.snapshot.paramMap.get('fuelId')! : null;
    this.fuelForm = this.fb.group({
      name: ['', Validators.required],
      startingPoint: ['', Validators.required],
      destination: ['', Validators.required],
      distance: ['', [Validators.required, Validators.min(1)]], 
      fuelConsumption: ['', [Validators.required, Validators.min(1)]],
      petrolPrice: ['', [Validators.required, Validators.min(0.1)]], 
      totalCost: [{ value: '',  }] 
    });

    this.fuelForm.valueChanges.subscribe(values => {
      this.calculateTotalCost();
    });
  }

  calculateTotalCost() {
    const distance = this.fuelForm.get('distance')?.value;
    const fuelConsumption = this.fuelForm.get('fuelConsumption')?.value;
    const petrolPrice = this.fuelForm.get('petrolPrice')?.value;

    if (distance && fuelConsumption && petrolPrice) {
      const totalCost = (distance / 100) * fuelConsumption * petrolPrice;
      this.fuelForm.patchValue({ totalCost: totalCost.toFixed(2) }, { emitEvent: false });
    }
  }

  onSubmit() {
    if (this.fuelForm.valid) {
      console.log('Fuel Form Submitted:', this.fuelForm.value);
    }
  }
}
