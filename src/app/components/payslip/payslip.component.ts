import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-payslip',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <h2>Payslip</h2>
    <div>
      <p>Employee Name: John Doe</p>
      <p>Employee ID: EMP001</p>
      <p>Pay Period: May 2023</p>
      <!-- Add more payslip details here -->
    </div>
    <button mat-raised-button color="primary" (click)="downloadPayslip()">Download Payslip</button>
  `
})
export class PayslipComponent {
  downloadPayslip() {
    // Implement download functionality
    console.log('Downloading payslip...');
  }
}