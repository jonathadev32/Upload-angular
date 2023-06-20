import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFileRoutingModule } from './upload-file-routing.module';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploadFileComponent],

  imports: [
    CommonModule,
    UploadFileRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule

  ],
})
export class UploadFileModule {}
