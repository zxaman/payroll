import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-declaration',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  styleUrls: ['./declaration.component.scss'],
  template: `
    <h2>Declaration</h2>
    <form>
      <mat-form-field>
        <mat-label>House Rent</mat-label>
        <input matInput type="number">
      </mat-form-field>
      <mat-form-field>
        <mat-label>LIC Premium</mat-label>
        <input matInput type="number">
      </mat-form-field>
      <mat-form-field>
        <mat-label>PPF</mat-label>
        <input matInput type="number">
      </mat-form-field>
      <button mat-raised-button color="primary">Submit Declaration</button>
    </form>
  `
})
export class DeclarationComponent {}