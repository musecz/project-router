import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

/*
* Services
* */
import { ContactService } from './contact.service';
/*
* Component
* */
import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
/*
* Routing
* */
import { ContactRoutingModule  } from './contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent,
    ContactListComponent,
    ContactHomeComponent,
    ContactDetailComponent
  ],
  providers: [
    ContactService
  ],
})
export class ContactModule {}