import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule {
}
