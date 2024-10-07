import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h2 class="text-2xl font-bold mb-6 text-center md:text-left">Dashboard</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
      <section class="bg-blue-100 p-4 rounded-lg shadow" aria-labelledby="total-employees">
        <h3 id="total-employees" class="text-lg font-semibold">Total Employees</h3>
        <p class="text-3xl font-bold">150</p>
      </section>
      
      <section class="bg-green-100 p-4 rounded-lg shadow" aria-labelledby="total-payroll">
        <h3 id="total-payroll" class="text-lg font-semibold">Total Payroll</h3>
        <p class="text-3xl font-bold">$250,000</p>
      </section>
      
      <section class="bg-yellow-100 p-4 rounded-lg shadow" aria-labelledby="pending-approvals">
        <h3 id="pending-approvals" class="text-lg font-semibold">Pending Approvals</h3>
        <p class="text-3xl font-bold">5</p>
      </section>
      
      <section class="bg-purple-100 p-4 rounded-lg shadow" aria-labelledby="next-payday">
        <h3 id="next-payday" class="text-lg font-semibold">Next Payday</h3>
        <p class="text-3xl font-bold">15 days</p>
      </section>
    </div>
  `,
})
export class DashboardComponent {}
