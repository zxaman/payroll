import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PayslipComponent } from './components/payslip/payslip.component';
import { SalaryStructureComponent } from './components/salary-structure/salary-structure.component';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { DirectoryComponent } from './components/directory/directory.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employees', component: EmployeeListComponent },
      { path: 'payroll', component: PayrollComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'payslip', component: PayslipComponent },
      { path: 'salary-structure', component: SalaryStructureComponent },
      { path: 'declaration', component: DeclarationComponent },
      { path: 'bank-details', component: BankDetailsComponent },
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'leaves', component: LeavesComponent },
      { path: 'directory', component: DirectoryComponent },
    ]),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }