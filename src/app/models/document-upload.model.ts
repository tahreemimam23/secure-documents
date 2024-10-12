export class DocumentUpload {
    public key: string;
    public name: string;
    public imageUrl: string;
    public documentType:string;
    public file: File;

    constructor(key:string,name:string,imageUrl:string,documentType:string,file: File) {
        this.key = key;
        this.name = name;
        this.imageUrl=imageUrl;
        this.documentType = documentType;
        this.file = file;
    }
}