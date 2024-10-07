import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-salary-structure',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  template: `
    <h2>Salary Structure</h2>
    <table mat-table [dataSource]="salaryComponents">
      <ng-container matColumnDef="component">
        <th mat-header-cell *matHeaderCellDef>Component</th>
        <td mat-cell *matCellDef="let element">{{element.component}}</td>
      </ng-container>
      <ng-container matColumnDef="amount">
        <th mat-header-cell *matHeaderCellDef>Amount</th>
        <td mat-cell *matCellDef="let element">{{element.amount | currency}}</td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `
})
export class SalaryStructureComponent {
  displayedColumns: string[] = ['component', 'amount'];
  salaryComponents = [
    { component: 'Basic Salary', amount: 5000 },
    { component: 'HRA', amount: 2000 },
    { component: 'Transport Allowance', amount: 800 },
    { component: 'Medical Allowance', amount: 1200 },
  ];
}
