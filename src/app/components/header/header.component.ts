import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-blue-600 text-white p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Payroll Management System</h1>
        <ul class="flex space-x-4">
          <li><a routerLink="/dashboard" routerLinkActive="font-bold">Dashboard</a></li>
          <li><a routerLink="/employees" routerLinkActive="font-bold">Employees</a></li>
          <li><a routerLink="/payroll" routerLinkActive="font-bold">Payroll</a></li>
          <li><a routerLink="/reports" routerLinkActive="font-bold">Reports</a></li>
        </ul>
      </nav>
    </header>
  `
})
export class HeaderComponent {}