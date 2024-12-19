import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CardComponent,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    CardComponent,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SharedModule {}
