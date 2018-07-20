import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatToolbarModule, MatButtonModule, MatInputModule, MatDialogModule, MatDividerModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule
  ],
})
export class MaterialModule {
}
