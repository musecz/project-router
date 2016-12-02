import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

/*
* Services
* */
import { TwitterService } from './twitter.service';

/*
* Component
* */
import {TwitterComponent} from "./twitter.component";
/*
* Routing
* */
import {TwitterRoutingModule} from "./twitter-routing.module";
import { TwitterDetailComponent } from './twitter-detail/twitter-detail.component';


@NgModule({
  imports: [
    CommonModule,
    TwitterRoutingModule
  ],
  declarations: [
    TwitterComponent,
    TwitterDetailComponent
  ],
  providers: [
    TwitterService
  ]
})
export class TwitterModule {}