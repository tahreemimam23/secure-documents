import { Component, Input, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { DocumentService } from '../../../services/document.service';
import { DocumentUpload } from '../../../models/document-upload.model';

@Component({
  selector: 'app-document-upload-form',
  templateUrl: './document-upload-form.component.html',
  styleUrl: './document-upload-form.component.css'
})
export class DocumentUploadFormComponent {
  @Input() item: any = {};
  imgSrc: string = '';
  selectedImage: File;
  isSubmitted: boolean = false;
  percentage: number;
  currentFileUpload: DocumentUpload;;


  formTemplate = new FormGroup({
    documentType: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  })

  constructor(private storage: AngularFireStorage, private service: DocumentService) { }

  ngOnInit() {
    this.resetForm();
    console.log(this.item)
  }

  onSubmit(form: FormGroup) {
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
