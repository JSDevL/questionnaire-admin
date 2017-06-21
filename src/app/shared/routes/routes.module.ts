import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "../../admin/admin.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AdminComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ],
    declarations: []
})
export class RoutesModule {
}
