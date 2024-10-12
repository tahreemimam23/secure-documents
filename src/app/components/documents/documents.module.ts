import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';
import { RouterModule } from '@angular/router';
import { DocumentUploadFormComponent } from './document-upload-form/document-upload-form.component';



@NgModule({
  declarations: [DocumentsComponent,DocumentUploadFormComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [DocumentsComponent]
})
export class DocumentsModule { }
