import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-leaves',
  standalone: true,
  imports: [MatTableModule],
  template: `
    <h2>Leaves</h2>
    <table mat-table [dataSource]="leavesData">
      <ng-container matColumnDef="type">
        <th mat-header-cell *matHeaderCellDef>Type</th>
        <td mat-cell *matCellDef="let element">{{element.type}}</td>
      </ng-container>
      <ng-container matColumnDef="total">
        <th mat-header-cell *matHeaderCellDef>Total</th>
        <td mat-cell *matCellDef="let element">{{element.total}}</td>
      </ng-container>
      <ng-container matColumnDef="used">
        <th mat-header-cell *matHeaderCellDef>Used</th>
        <td mat-cell *matCellDef="let element">{{element.used}}</td>
      </ng-container>
      <ng-container matColumnDef="balance">
        <th mat-header-cell *matHeaderCellDef>Balance</th>
        <td mat-cell *matCellDef="let element">{{element.balance}}</td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `
})
export class LeavesComponent {
  displayedColumns: string[] = ['type', 'total', 'used', 'balance'];
  leavesData = [
    {type: 'Casual Leave', total: 12, used: 5, balance: 7},
    {type: 'Sick Leave', total: 10, used: 2, balance: 8},
    {type: 'Privilege Leave', total: 15, used: 0, balance: 15},
  ];
}