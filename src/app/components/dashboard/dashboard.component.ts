import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-blue-100 p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold">Total Employees</h3>
        <p class="text-3xl font-bold">150</p>
      </div>
      <div class="bg-green-100 p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold">Total Payroll</h3>
        <p class="text-3xl font-bold">$250,000</p>
      </div>
      <div class="bg-yellow-100 p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold">Pending Approvals</h3>
        <p class="text-3xl font-bold">5</p>
      </div>
      <div class="bg-purple-100 p-4 rounded-lg shadow">
        <h3 class="text-lg font-semibold">Next Payday</h3>
        <p class="text-3xl font-bold">15 days</p>
      </div>
    </div>
  `
})
export class DashboardComponent {}