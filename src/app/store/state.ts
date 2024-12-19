import { Employee } from "../shared/models/employee.model";

export interface AppState {
  employees: Employee[]
  filteredEmployees: Employee[];
  filter: string;
  loading: boolean;
  error: string | null;
}

export const initialState: AppState = {
  employees: [],
  filteredEmployees: [],
  filter: "",
  loading: false,
  error: null,
};
