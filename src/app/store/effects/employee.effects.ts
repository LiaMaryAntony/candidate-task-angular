import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadEmployees, loadEmployeesSuccess, loadEmployeesFailure, updateEmployee, updateEmployeeSuccess, updateEmployeeFailure } from '../actions/employee.actions';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class EmployeeEffects {
  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmployees),
      mergeMap(() =>
        this.employeeService.getEmployeeList().pipe(
          map((employees) => loadEmployeesSuccess({ employees })),
          catchError((error) => [loadEmployeesFailure({ error: error.message })])
        )
      )
    ));

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEmployee),
      mergeMap((action) =>
        this.employeeService.updateEmployee(action.employee).pipe(
          map((updatedEmployee) => updateEmployeeSuccess({ employee: updatedEmployee })),
          catchError((error) => of(updateEmployeeFailure({ error: error.message })))
        )
      ),
      map(() => {
        this.dialog.closeAll(); 
        return { type: '[Employee] Dialog Closed' }; 
      })
    )
 );

  constructor(private actions$: Actions, private employeeService: ApiService, private dialog: MatDialog) {}
}
