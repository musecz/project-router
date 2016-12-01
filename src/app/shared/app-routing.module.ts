import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/contact',
        pathMatch: 'full'
    },
    {
        path: 'contact',
        loadChildren: 'app/contact/contact.module#ContactModule'
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {}

