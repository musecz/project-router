import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

/*
* Component
* */
import {AdminComponent} from "./admin.component";
import {ManageContactComponent} from "./manage-contact/manage-contact.component";
import {AdmindashboardComponent} from "./admin-dashboard.component";
/*
* Routing
* */
import {AdminRoutingModule} from "./admin-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    ManageContactComponent,
    AdmindashboardComponent
  ],
  providers: [
    
  ]
})
export class AdminModule {}