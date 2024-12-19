import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employee/employee-list',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    loadChildren: () => import('./admin/employee/employee.module').then((m) => m.EmployeeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
