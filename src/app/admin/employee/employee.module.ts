import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/materials/material.module';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
})
export class EmployeeModule { }
