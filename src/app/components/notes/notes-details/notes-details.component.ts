import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';

interface Note {
  noteId : number,
  title: string;
  images: string[];
  description: string;
}

@Component({
  selector: 'app-notes-details',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,RouterLink],
  templateUrl: './notes-details.component.html',
  styleUrl: './notes-details.component.scss'
})
export class NotesDetailsComponent {
  note: Note = {
    noteId:1,
    title: "Image Collection",
    images: [
      "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
    ],
    description: "A collection of images showcasing different visuals."
  };
  
  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.note.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.note.images.length) % this.note.images.length;
  }
}
