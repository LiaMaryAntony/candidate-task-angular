import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { EmployeeUpdateComponent } from "../employee-update/employee-update.component";
import { Observable, of } from "rxjs";
import { EmployeeResponseState,Employee } from "src/app/shared/models/employee.model";
import { Store } from "@ngrx/store";
import {
  loadEmployees,
  setFilter,
} from "src/app/store/actions/employee.actions";
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrl: "./employee-list.component.scss",
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ["name", "email", "role", "status", "action"];
  dataSource: MatTableDataSource<Employee> = new MatTableDataSource<Employee>();
  filter: string = "";
  employees$: Observable<Employee[]>= of([]);
  loading$: Observable<boolean>= of(false);;
  error$!: Observable<string | null>;

  constructor(
    public dialog: MatDialog,
    private store: Store<EmployeeResponseState >,
  ) {}

  ngOnInit() {

    this.employees$ = this.store.select(
    (state: EmployeeResponseState ) => state.employees["employees"],
    );
    this.loading$ = this.store.select((state) => state.loading);
    this.error$ = this.store.select((state) => state.error);
    this.store.dispatch(loadEmployees());
    this.store
      .select((state: EmployeeResponseState ) => state.employees["filteredEmployees"])
      .subscribe((employees) => {
        this.dataSource.data = employees;
      });
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.store.dispatch(setFilter({ filter: filterValue }));
  }
  onEdit(employeeDetails:Employee) {
    const dialogRef = this.dialog.open(EmployeeUpdateComponent, {
      width: 'auto',
      height: 'auto',
      data: employeeDetails,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.store.dispatch(loadEmployees());
      }
    });
  }
}
