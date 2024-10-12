import { Routes } from '@angular/router';
import { DocumentsComponent } from './components/documents/documents.component';

export const routes: Routes = [
    { path: '', redirectTo: 'document', pathMatch: 'full' },
    {path:'document', component: DocumentsComponent}
    // {
    //     path: 'image', component: ImagesComponent, children: [
    //         {
    //             path: 'upload', component: ImageComponent
    //         },
    //         {
    //             path: 'list', component: ImageListComponent
    //         }
    //     ]
    // }
];
