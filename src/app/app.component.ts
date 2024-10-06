import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>Payroll Management System</span>
    </mat-toolbar>

    <mat-sidenav-container>
      <mat-sidenav #sidenav mode="side" opened>
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard">Dashboard</a>
          <a mat-list-item routerLink="/employees">Employees</a>
          <a mat-list-item routerLink="/payroll">Payroll</a>
          <a mat-list-item routerLink="/reports">Reports</a>
          <a mat-list-item routerLink="/payslip">Payslip</a>
          <a mat-list-item routerLink="/salary-structure">Salary Structure</a>
          <a mat-list-item routerLink="/declaration">Declaration</a>
          <a mat-list-item routerLink="/bank-details">Bank Details</a>
          <a mat-list-item routerLink="/my-profile">My Profile</a>
          <a mat-list-item routerLink="/attendance">Attendance</a>
          <a mat-list-item routerLink="/leaves">Leaves</a>
          <a mat-list-item routerLink="/directory">Directory</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <div class="container">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    mat-sidenav-container {
      height: calc(100vh - 64px);
    }
    mat-sidenav {
      width: 200px;
    }
  `]
})
export class AppComponent {
  title = 'Payroll Management System';
}