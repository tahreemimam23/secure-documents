import { Routes } from '@angular/router';
import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentUploadFormComponent } from './components/documents/document-upload-form/document-upload-form.component';
import { DocumentListComponent } from './components/documents/document-list/document-list.component';
import { DocUploadFormComponent } from './docs/doc-upload-form/doc-upload-form.component';
import { DocListComponent } from './docs/doc-upload-form/doc-list/doc-list.component';


export const routes: Routes = [
    { path: '', redirectTo: 'document/upload', pathMatch: 'full' },
    // {path:'document-upload', component: DocUploadFormComponent},
    // {path:'document-list', component: DocListComponent}
    // { path: '', redirectTo: 'document-upload', pathMatch: 'full' },
    // {
    //     path:'document-upload', component: DocUploadFormComponent, children: [
    //         {
    //             path:'list', component:DocListComponent
    //         },
    //     ]
    // }
    {
        path:'document', component: DocumentsComponent, children: [
            {
                path:'upload', component:DocumentUploadFormComponent
            },
            {
                path:'list', component:DocumentListComponent
            }
        ]
    }
];
