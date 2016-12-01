import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/*
 * Component
 * */
import {AdminComponent} from "./admin.component";
import {ManageContactComponent} from "./manage-contact/manage-contact.component";
import {AdmindashboardComponent} from "./admin-dashboard.component";
/*
 * Guards
 * */

/*
 * Resolver
 * */

/*
 * Configuration
 * */
const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: AdmindashboardComponent,
            },
            {
                path: 'contact',
                component: ManageContactComponent
            }
         ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {
}