import { Routes } from '@angular/router';
import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentUploadFormComponent } from './components/documents/document-upload-form/document-upload-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'document/upload', pathMatch: 'full' },
    {
        path:'document', component: DocumentsComponent, children: [
            {
                path:'upload', component:DocumentUploadFormComponent
            }
        ]
    }
];
