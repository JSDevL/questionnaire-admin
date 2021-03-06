import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {RoutesModule} from "./shared/routes/routes.module";
import {AdminComponent} from "./admin/admin.component";
import {TreeModule} from "angular-tree-component";
import {SectionOptionsComponent} from "./admin/section-options/section-options.component";
import { ManageQuestionsComponent } from './admin/section-options/manage-questions/manage-questions.component';

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        SectionOptionsComponent,
        ManageQuestionsComponent
    ],
    imports: [
        TreeModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
