import { Component, EventEmitter, Output } from '@angular/core';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {
  key:string;
  constructor(private service: DocumentService) { }
  ngOnInit() {
    //to initialize documentDetailList
    this.service.getDocumentDetailList()
  }

  // fetchKey(key: string) {
  //   this.key = key;
  //   console.log(this.key)
  // }
}
