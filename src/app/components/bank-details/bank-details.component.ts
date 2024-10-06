import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-bank-details',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  template: `
    <h2>Bank Account Details</h2>
    <mat-form-field>
      <mat-label>Bank Name</mat-label>
      <input matInput value="Example Bank" readonly>
    </mat-form-field>
    <mat-form-field>
      <mat-label>Account Number</mat-label>
      <input matInput value="XXXXXXXX1234" readonly>
    </mat-form-field>
    <mat-form-field>
      <mat-label>IFSC Code</mat-label>
      <input matInput value="EXBK0000001" readonly>
    </mat-form-field>
  `
})
export class BankDetailsComponent {}