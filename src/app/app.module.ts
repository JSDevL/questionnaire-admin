import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RoutesModule} from "./shared/routes/routes.module";
import { AdminComponent } from './admin/admin.component';

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent
    ],
    imports: [
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
