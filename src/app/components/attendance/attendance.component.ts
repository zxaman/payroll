import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [MatTableModule],
  template: `
    <h2>Attendance</h2>
    <table mat-table [dataSource]="attendanceData">
      <ng-container matColumnDef="date">
        <th mat-header-cell *matHeaderCellDef>Date</th>
        <td mat-cell *matCellDef="let element">{{element.date}}</td>
      </ng-container>
      <ng-container matColumnDef="status">
        <th mat-header-cell *matHeaderCellDef>Status</th>
        <td mat-cell *matCellDef="let element">{{element.status}}</td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `
})
export class AttendanceComponent {
  displayedColumns: string[] = ['date', 'status'];
  attendanceData = [
    {date: '2023-05-01', status: 'Present'},
    {date: '2023-05-02', status: 'Present'},
    {date: '2023-05-03', status: 'Absent'},
    {date: '2023-05-04', status: 'Present'},
  ];
}