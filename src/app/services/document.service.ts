import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';
import { DocumentUpload } from '../models/document-upload.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentDetailList: AngularFireList<any>;
  
  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  pushDocumentToStorage(documentUpload: DocumentUpload, formValue: any): Observable<number> {
    var filePath = `${formValue.category}/${documentUpload.file.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`
    const fileRef = this.storage.ref(filePath);
    documentUpload.documentType = formValue.documentType;
    documentUpload.name = documentUpload.file.name
    const uploadTAsk = this.storage.upload(filePath, documentUpload.file);
    uploadTAsk.snapshotChanges()
      .pipe(
        //it will return image after 100 percent upload
        finalize(() => {
          fileRef.getDownloadURL().subscribe((downloadURL) => {
            documentUpload.imageUrl = downloadURL
            this.insertDocumentDetails(documentUpload);
          }
          )
        })
      ).subscribe();

    return uploadTAsk.percentageChanges();
  }

  //initialize imageDetailList
  getDocumentDetailList() {
    this.documentDetailList = this.firebase.list('documentDetails');
  }

  insertDocumentDetails(documentDetails) {
    this.documentDetailList.push(documentDetails);
  }

  deleteDocument(key: any): void {
    this.firebase.list('documentDetails').remove(key)
  }

  updateDocument(key: any, formvalue: any) {
    this.firebase.list('documentDetails').update(key, formvalue)
  }
}
