import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  // store the URL  so we can redirect after logging in
  redirectUrl: string;

  /**
   * Generate a fake authentification
   * @returns {Observable<T>}
   */
  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(() => this.isLoggedIn = true);
  }

  /**
   * Logging out...
   */
  logout(): void {
    this.isLoggedIn = false;
  }
}
