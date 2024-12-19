import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../models/employee.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  API_URL: string ="https://675c27ebfe09df667f62d647.mockapi.io/employee/employees";
  constructor(
    private http: HttpClient,
  ) {
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL);
  }
  

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.API_URL}/${employee.id}`, employee);
  }
}
