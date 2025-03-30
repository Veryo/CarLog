import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,CommonModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './notes-form.component.html',
  styleUrl: './notes-form.component.scss'
})
export class NotesFormComponent {
  noteForm!: FormGroup;
  noteId!: number | null;
  selectedImages: File[] = [];

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.noteId = this.route.snapshot.paramMap.get('noteId') ? +this.route.snapshot.paramMap.get('noteId')! : null;

    this.noteForm = this.fb.group({
      title: ['', Validators.required], 
      description: ['', [Validators.required, Validators.minLength(10)]],
      images: [this.selectedImages, Validators.required]
    });
  }

  // onSubmit() {
  //   if (this.noteForm.valid) {
  //     console.log('Fuel Form Submitted:', this.noteForm.value);
  //   }
  // }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files) {
      this.selectedImages = Array.from(input.files);
      this.noteForm.patchValue({
        images: this.selectedImages
      });
    }
  }
  onSubmit(): void {
    if (this.noteForm.valid) {
      // Handle form submission logic
      console.log(this.noteForm.value);
    }
  }
}
