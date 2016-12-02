import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
 * Component
 * */
import {TwitterComponent} from "./twitter.component";
import {TwitterDetailComponent} from "./twitter-detail/twitter-detail.component";

/*
 * Guards
 * */

/*
 * Resolver
 * */

/*
 * Configuration
 * */
const TwitterRoutes: Routes = [
    {
        path: '',
        component: TwitterComponent
    },
    {
        path: ':id',
        component: TwitterDetailComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(TwitterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TwitterRoutingModule  {}