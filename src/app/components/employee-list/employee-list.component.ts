import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="text-2xl font-bold mb-4">Employee List</h2>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">ID</th>
          <th class="py-2 px-4 border-b">Name</th>
          <th class="py-2 px-4 border-b">Position</th>
          <th class="py-2 px-4 border-b">Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let employee of employees">
          <td class="py-2 px-4 border-b">{{ employee.id }}</td>
          <td class="py-2 px-4 border-b">{{ employee.name }}</td>
          <td class="py-2 px-4 border-b">{{ employee.position }}</td>
          <td class="py-2 px-4 border-b">{{ employee.salary | currency }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class EmployeeListComponent {
  employees = [
    { id: 1, name: 'John Doe', position: 'Developer', salary: 75000 },
    { id: 2, name: 'Jane Smith', position: 'Designer', salary: 70000 },
    { id: 3, name: 'Bob Johnson', position: 'Manager', salary: 90000 },
  ];
}