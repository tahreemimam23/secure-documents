import { Routes } from '@angular/router';
import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentUploadFormComponent } from './components/documents/document-upload-form/document-upload-form.component';
import { DocumentListComponent } from './components/documents/document-list/document-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'document/upload', pathMatch: 'full' },
    {path:'document/upload', component: DocumentUploadFormComponent},
    {path:'document/list', component:DocumentsComponent},
];
