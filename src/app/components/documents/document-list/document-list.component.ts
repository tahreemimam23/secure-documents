import { Component, EventEmitter, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DocumentService } from '../../../services/document.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  documentList$: Observable<any[]>;
  @Output() updateDocEvent = new EventEmitter<Object>();
  constructor(private service: DocumentService) { }
  ngOnInit() {
    this.documentList$ = this.service.documentDetailList.snapshotChanges().pipe(
      map(list => {
        return list.map(item => { return { key: item.key, ...item.payload.val() } })
      })
    );
  }

  deleteDocument(key: string) {
    this.service.deleteDocument(key);
  }

  upadateDocument(key: string,docType:string,imageUrl:string){
    this.updateDocEvent.emit({key,docType,imageUrl});
  }
}
