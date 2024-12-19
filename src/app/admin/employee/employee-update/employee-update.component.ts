import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { Employee } from "src/app/shared/models/employee.model";
import { updateEmployee } from "src/app/store/actions/employee.actions";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.scss'
})
export class EmployeeUpdateComponent implements OnInit {
  employeeEntryForm: FormGroup = new FormGroup({});
  today: Date = new Date();

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<EmployeeUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
  ) {
    this.formInit();
  }
  ngOnInit(): void {
    this.onSelectedEmployee();
  }
  updateEmployee(): void {
    if(this.employeeEntryForm.valid) {
      this.store.dispatch(updateEmployee({ employee: this.employeeEntryForm.value }));
    }
  }
  formInit() {
    this.employeeEntryForm = new FormGroup({
      createdAt: new FormControl(""),
      avatar: new FormControl(""),
      id: new FormControl(""),
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      joining_date: new FormControl("", Validators.required),
      role: new FormControl("", Validators.required),
      status: new FormControl("", Validators.required),
    });
  }
  onCancel(): void {
    this.dialogRef.close(true);
  }
  onSelectedEmployee() {
    this.employeeEntryForm.patchValue(this.data);
  }
}

