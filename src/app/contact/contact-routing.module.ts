import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
 * Component
 * */
import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactListComponent } from './contact-list/contact-list.component';

/*
 * Guards
 * */
import { ContactDetailResolveService } from './contact-detail-resolve.service';
import { CanDeactivateGuard } from '../shared/can-deactivate-guard.service';
/*
 * Resolver
 * */

/*
 * Configuration
 * */
const contactRoutes: Routes = [
    {
        path: '',
        component: ContactComponent,
        children: [
            {
                path: '',
                component: ContactListComponent,
                children: [
                    {
                        path: '',
                        component: ContactHomeComponent
                    },
                    {
                        path: ":id",
                        component: ContactDetailComponent,
                        canDeactivate: [CanDeactivateGuard],
                        resolve: {
                            contact: ContactDetailResolveService
                        }
                    }
                ]
            }
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
      ContactDetailResolveService,
      CanDeactivateGuard
  ]
})
export class  ContactRoutingModule{}


