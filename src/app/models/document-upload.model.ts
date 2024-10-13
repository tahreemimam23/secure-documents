export class DocumentUpload {
    public key: string;
    public name: string;
    public imageUrl: string;
    public documentType:string;
    public file: File;

    constructor(file: File) {
        this.file = file;
    }

    // constructor(file: File,key:string,name:string,imageUrl:string,documentType:string) {
    //     this.key = key;
    //     this.name = name;
    //     this.imageUrl=imageUrl;
    //     this.documentType = documentType;
    //     this.file = file;
    // }
}