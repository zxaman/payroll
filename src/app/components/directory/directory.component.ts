import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [MatCardModule, NgForOf],
  template: `
    <h2>Employee Directory</h2>
    <div class="directory-grid">
      <mat-card *ngFor="let employee of employees">
        <mat-card-header>
          <img mat-card-avatar [src]="employee.profilePic" alt="Profile picture">
          <mat-card-title>{{employee.name}}</mat-card-title>
          <mat-card-subtitle>{{employee.designation}}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Employee ID: {{employee.empId}}</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .directory-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
    }
  `]
})
export class DirectoryComponent {
  employees = [
    { name: 'John Doe', designation: 'Software Developer', empId: 'EMP001', profilePic: 'assets/john.jpg' },
    { name: 'Jane Smith', designation: 'UI/UX Designer', empId: 'EMP002', profilePic: 'assets/jane.jpg' },
    { name: 'Bob Johnson', designation: 'Project Manager', empId: 'EMP003', profilePic: 'assets/bob.jpg' },
  ];
}