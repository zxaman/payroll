import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-bank-details',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  template: `
    <h2>Bank Account Details</h2>
    <div class="bank-details-container">
      <mat-form-field appearance="outline">
        <mat-label>Bank Name</mat-label>
        <input matInput value="Example Bank" readonly aria-label="Bank Name">
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Account Number</mat-label>
        <input matInput value="XXXXXXXX1234" readonly aria-label="Account Number">
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>IFSC Code</mat-label>
        <input matInput value="EXBK0000001" readonly aria-label="IFSC Code">
      </mat-form-field>
    </div>
  `,
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent {}
