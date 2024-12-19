import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user/employee-list',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./admin/employee/employee.module').then((m) => m.EmployeeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
