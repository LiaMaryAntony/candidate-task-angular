import { createAction, props } from '@ngrx/store';
import { Employee } from '../../shared/models/employee.model';

export const loadEmployees = createAction('[Employee] Load Employees');
export const loadEmployeesSuccess = createAction(
  '[Employee] Load Employees Success',
  props<{ employees: Employee[] }>()
);
export const loadEmployeesFailure = createAction(
  '[Employee] Load Employees Failure',
  props<{ error: string }>()
);
export const setFilter = createAction(
    '[Employee] Set Filter',
    props<{ filter: string }>()
  );

export const updateEmployee = createAction(
    '[Employee] Update Employee',
    props<{ employee: Employee }>()
  );
  export const updateEmployeeSuccess = createAction(
    '[Employee] Update Employee Success',
    props<{ employee: Employee }>()
  );
  export const updateEmployeeFailure = createAction(
    '[Employee] Update Employee Failure',
    props<{ error: string }>()
  );
