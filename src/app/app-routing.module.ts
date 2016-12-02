import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth-guard.service';
import { PreloadSelectedModules } from './shared/selective-preload-strategy.service';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/contact',
        pathMatch: 'full',
    },
    {
        path: 'contact',
        loadChildren: 'app/contact/contact.module#ContactModule',
        data: {
            preload: true
        }
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { preloadingStrategy: PreloadSelectedModules }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
      AuthGuard,
      PreloadSelectedModules
  ]
})
export class AppRoutingModule {}

