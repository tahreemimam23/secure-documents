export class DocumentUpload {
    public key: string;
    public name: string;
    public imageUrl: string;
    public documentType:string;
    public file: File;

    constructor(file: File) {
        this.file = file;
    }
}