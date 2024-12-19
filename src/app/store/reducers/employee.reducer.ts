import { createReducer, on } from "@ngrx/store";
import {
  loadEmployees,
  loadEmployeesSuccess,
  loadEmployeesFailure,
  updateEmployeeSuccess,
  updateEmployeeFailure,
  setFilter,
} from "../actions/employee.actions";
import { initialState } from "../state";

export const employeeReducer = createReducer(
  initialState,
  on(loadEmployees, (state) => ({ ...state, loading: true })),
  on(loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees,
    filteredEmployees: employees,
    loading: false,
    error: null,
  })),
  on(loadEmployeesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(setFilter, (state, { filter }) => {
    const lowerCaseFilter = filter.toLowerCase();
    const filteredEmployees = state.employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(lowerCaseFilter) ||
        employee.email.toLowerCase().includes(lowerCaseFilter) ||
        employee.role.toLowerCase().includes(lowerCaseFilter) ||
        (lowerCaseFilter.includes('completed') && employee.status === true ) ||
        (lowerCaseFilter.includes('pending')&& employee.status === false )
    );
    return {
      ...state,
      filter,
      filteredEmployees,
    };
  }),
  on(updateEmployeeSuccess, (state, { employee }) => ({
    ...state,
    employees: state.employees.map((emp) =>
      emp.id === employee.id ? { ...emp, ...employee } : emp,
    ),
  })),
  on(updateEmployeeFailure, (state, { error }) => ({
    ...state,
    error,
  })),
);
