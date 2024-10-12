import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentUploadFormComponent } from './document-upload-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DocumentUploadFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[DocumentUploadFormComponent]
})
export class DocumentUploadFormModule { }
