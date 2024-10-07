import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <h2>My Profile</h2>
    <mat-card>
      <mat-card-header>
        <mat-card-title>John Doe</mat-card-title>
        <mat-card-subtitle>Software Developer</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>Employee ID: EMP001</p>
        <p>Email: john.doeexample.com</p>
        <p>Phone: +1 234 567 8900</p>
        <p>Date of Joining: 01/01/2020</p>
      </mat-card-content>
    </mat-card>
  `
})
export class MyProfileComponent {}