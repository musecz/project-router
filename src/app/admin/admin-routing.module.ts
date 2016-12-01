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
import {AuthGuard} from "../shared/auth-guard.service";
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
        canActivate: [AuthGuard],
        children: [
            {
                // On groupe les deux routes afin de les protéger avec authGuard
                // Autrement il aurait fallu ajouter canActivateChild sur tous les enfants
                path: '',
                canActivateChild: [AuthGuard],
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