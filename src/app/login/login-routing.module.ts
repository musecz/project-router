import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
 * Component
 * */
import { LoginComponent } from './login.component';

/*
 * Service
 * */
import { AuthService } from '../shared/auth.service';

/*
 * Guards
 * */


/*
 * Configuration
 * */
const LoginRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(LoginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginRoutingModule  {}