import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
export interface PeriodicElement {
  name: string;
  fuelId: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fuelId: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {fuelId: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {fuelId: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {fuelId: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {fuelId: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {fuelId: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {fuelId: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {fuelId: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {fuelId: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {fuelId: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  
];
@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,MatIcon,RouterLink],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  displayedColumns: string[] = [ 'name','symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private router : Router){}
  onRowClick(row: any): void {
    this.router.navigate(['/notes-details',row.fuelId])
  }

  onDeleteClick( element: any): void {
    console.log('Delete button clicked', element);
  }
}
