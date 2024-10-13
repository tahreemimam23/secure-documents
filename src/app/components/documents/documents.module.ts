import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';
import { RouterModule } from '@angular/router';
import { DocumentUploadFormComponent } from './document-upload-form/document-upload-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentListComponent } from './document-list/document-list.component';



@NgModule({
  declarations: [DocumentsComponent,DocumentUploadFormComponent,DocumentListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DocumentsComponent]
})
export class DocumentsModule { }
