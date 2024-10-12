import { importProvidersFrom, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { routes } from "./app.routes";
import { firebaseConfig } from "./constants/firebase-config";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { DocumentUploadFormModule } from "./components/document-upload-form/document-upload-form.module";

@NgModule({
    declarations: [],
    bootstrap: [AppComponent],
    imports: [
        RouterOutlet,
        BrowserModule,
        CommonModule,
        DocumentUploadFormModule,
        RouterModule.forRoot(routes)
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