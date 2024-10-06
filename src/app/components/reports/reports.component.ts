import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="text-2xl font-bold mb-4">Reports</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div *ngFor="let report of reports" class="bg-white p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-2">{{ report.name }}</h3>
        <p class="mb-2">{{ report.description }}</p>
        <button (click)="generateReport(report.name)" class="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
          Generate Report
        </button>
      </div>
    </div>
  `
})
export class ReportsComponent {
  reports = [
    { name: 'Payroll Summary', description: 'Overview of total payroll expenses for a specified period.' },
    { name: 'Employee Earnings', description: 'Detailed report of individual employee earnings and deductions.' },
    { name: 'Tax Withholdings', description: 'Summary of tax withholdings for compliance and reporting purposes.' },
    { name: 'Overtime Analysis', description: 'Analysis of overtime hours and associated costs.' },
  ];

  generateReport(reportName: string) {
    alert(`Generating ${reportName} report...`);
  }
}