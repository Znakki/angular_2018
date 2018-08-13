import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatDividerModule,
  MatDatepickerModule,
  MatIconModule,
  MatNativeDateModule,
  MatChipsModule, MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatChipsModule
  ],
})
export class MaterialModule {
}
