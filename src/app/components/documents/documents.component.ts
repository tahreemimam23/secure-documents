import { Component, EventEmitter, Output } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { DocumentUpload } from '../../models/document-upload.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {
  constructor(private service: DocumentService) { }
  ngOnInit() {
    //to initialize documentDetailList
    this.service.getDocumentDetailList()
  }
}
