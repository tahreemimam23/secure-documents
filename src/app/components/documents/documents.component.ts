import { Component, EventEmitter, Output } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { DocumentUpload } from '../../models/document-upload.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {
  display:boolean = false;
  updateData:DocumentUpload={
    key: '',
    name: '',
    imageUrl: '',
    documentType: '',
    file: undefined
  };
  constructor(private service: DocumentService) { }
  ngOnInit() {
    //to initialize documentDetailList
    this.service.getDocumentDetailList()
  }

  fetchKey(event) {
    this.updateData.key = event.key;
    this.updateData.documentType = event.docType;
    this.updateData.imageUrl = event.imageUrl;
    console.log(this.updateData.imageUrl)
  }
}
