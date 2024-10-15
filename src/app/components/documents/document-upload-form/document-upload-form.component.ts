import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { DocumentService } from '../../../services/document.service';
import { DocumentUpload } from '../../../models/document-upload.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-upload-form',
  templateUrl: './document-upload-form.component.html',
  styleUrl: './document-upload-form.component.css'
})
export class DocumentUploadFormComponent {
  imgSrc: string = '';
  selectedImage: File;
  isSubmitted: boolean = false;
  percentage: number;
  currentFileUpload: DocumentUpload;
  isUpdating:boolean=false;


  formTemplate = new FormGroup({
    documentType: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  })

  constructor(private storage: AngularFireStorage, private service: DocumentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.resetForm();
    this.route.queryParams.subscribe(
      params => {
        if(params['documentType']){
          this.isUpdating=true
        }
        this.formTemplate.get('documentType').setValue(params['documentType']);
        // this.service.updateDocument(params['key'],this.formTemplate)
      })
  }

  onSubmit(form: FormGroup) {
    console.log('saving')
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      if (this.formTemplate.valid) {
        const file = this.selectedImage;
        this.currentFileUpload = new DocumentUpload(file);
        this.service.pushDocumentToStorage(this.currentFileUpload, form.value).subscribe(
          percentage => {
            this.percentage = Math.round(percentage);
            if (this.percentage >= 100) {
              this.resetForm();
            }
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }

  onUpdating(form: FormGroup) {
    console.log('updating')
    // this.isSubmitted = true;
    // if (this.formTemplate.valid) {
    //   if (this.formTemplate.valid) {
    //     const file = this.selectedImage;
    //     this.currentFileUpload = new DocumentUpload(file);
    //     this.service.pushDocumentToStorage(this.currentFileUpload, form.value).subscribe(
    //       percentage => {
    //         this.percentage = Math.round(percentage);
    //         if (this.percentage >= 100) {
    //           this.resetForm();
    //         }
    //       },
    //       error => {
    //         console.log(error);
    //       }
    //     );
    //   }
    // }
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = 'assets/docs/image_placeholder.jpg',
        this.selectedImage = null;
    }
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrl: '',
      documentType: 'Aadhar'
    });
    this.imgSrc = 'assets/docs/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

  get formControls() {
    return this.formTemplate['controls'];
  }
}
