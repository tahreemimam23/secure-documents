import { importProvidersFrom, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { firebaseConfig } from "./constants/firebase-config";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { DocumentsModule } from "./components/documents/documents.module";
import { HeaderModule } from "./components/header/header.module";
import { DocUploadFormModule } from "./docs/doc-upload-form/doc-upload-form.module";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HeaderModule,
        DocumentsModule,
        DocUploadFormModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        importProvidersFrom([
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFireAuthModule,
            AngularFireDatabaseModule,
            AngularFirestoreModule
        ])
    ]
})
export class AppModule {

}