import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DocumentService } from '../../../services/document.service';
import { DocumentUpload } from '../../../models/document-upload.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  documentList$: Observable<DocumentUpload[]>;
  constructor(private service: DocumentService) { }
  ngOnInit() {
    this.documentList$ = this.service.documentDetailList.snapshotChanges().pipe(
      map(list => {
        return list.map(item => { return { key: item.key, ...item.payload.val() } })
      })
    );
  }

  deleteDocument(document: DocumentUpload) {
    this.service.deleteDocument(document);
  }
}
