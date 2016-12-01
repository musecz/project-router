import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router, NavigationExtras} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    message: string;

    constructor(public authService: AuthService,
                public router: Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = "Connexion...";
        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/contact';

                // Set our navigation extras object
                // that passes on our global query params and fragment
                let navigationExtras: NavigationExtras = {
                  preserveQueryParams: true,
                  preserveFragment: true
                };
                // Redirect the user
                this.router.navigate([redirect], navigationExtras);
            }

        })
    }

    /**
     * Logging out the user
     */
    logout() {
        this.authService.logout();
        this.setMessage();
    }

}
