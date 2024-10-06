import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2 class="text-2xl font-bold mb-4">Payroll Management</h2>
    <div class="mb-4">
      <label for="payPeriod" class="block mb-2">Select Pay Period:</label>
      <select id="payPeriod" [(ngModel)]="selectedPayPeriod" class="w-full p-2 border rounded">
        <option *ngFor="let period of payPeriods" [value]="period">{{ period }}</option>
      </select>
    </div>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">Employee</th>
          <th class="py-2 px-4 border-b">Base Salary</th>
          <th class="py-2 px-4 border-b">Overtime</th>
          <th class="py-2 px-4 border-b">Deductions</th>
          <th class="py-2 px-4 border-b">Net Pay</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let entry of payrollEntries">
          <td class="py-2 px-4 border-b">{{ entry.employee }}</td>
          <td class="py-2 px-4 border-b">{{ entry.baseSalary | currency }}</td>
          <td class="py-2 px-4 border-b">{{ entry.overtime | currency }}</td>
          <td class="py-2 px-4 border-b">{{ entry.deductions | currency }}</td>
          <td class="py-2 px-4 border-b">{{ entry.netPay | currency }}</td>
        </tr>
      </tbody>
    </table>
    <button (click)="processPayroll()" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Process Payroll
    </button>
  `
})
export class PayrollComponent {
  payPeriods = ['May 1-15, 2023', 'May 16-31, 2023', 'June 1-15, 2023'];
  selectedPayPeriod = this.payPeriods[0];
  payrollEntries = [
    { employee: 'John Doe', baseSalary: 3125, overtime: 250, deductions: 500, netPay: 2875 },
    { employee: 'Jane Smith', baseSalary: 2916, overtime: 0, deductions: 450, netPay: 2466 },
    { employee: 'Bob Johnson', baseSalary: 3750, overtime: 300, deductions: 600, netPay: 3450 },
  ];

  processPayroll() {
    alert('Payroll processed for ' + this.selectedPayPeriod);
  }
}