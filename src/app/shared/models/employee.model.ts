export interface Employee {
    createdAt: string,
    name: string,
    avatar: string,
    email: string,
    status: boolean,
    joining_date: string,
    role: string,
    id: string,
  }
  
  export interface EmployeeResponseState  {
    employees: {
      employees: Employee[];
      filteredEmployees: Employee[];
    };
    filter: string;
    loading: boolean;
    error: string | null;
  }
  