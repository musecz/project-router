import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild,
    CanLoad, NavigationExtras,
    Router,ActivatedRouteSnapshot,
    RouterStateSnapshot, Route} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private _authService: AuthService,
                private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute, state);
    }

    canLoad(route: Route): boolean {
        let url: string = `/${route.path}`;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this._authService.isLoggedIn)
            return true;

        // Store the attempted URL for redirecting if logging in is successful
        this._authService.redirectUrl = url;
        // Store the Session ID
        let sessionId = 123537278;
        // Set our navigation extras object that contains our global query params and fragment
        let navigationExtras: NavigationExtras = {
            queryParams: {
                'sessionId': sessionId
            },
            fragment: 'anchor'
        };
        // Navigate to the login page with the extra
        this._router.navigate(['/login'], navigationExtras);
        return false;

    }
}
