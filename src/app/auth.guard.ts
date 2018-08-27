import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, Router} from '@angular/router';
import {AppService} from './app.service';
import {AuthService} from './auth.service';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private appService: AppService, private router: Router, private authService: AuthService) {

  }

  canActivate() {
    return this.authChecked();
  }

  canActivateChild() {
    return this.authChecked();
  }

  private authChecked() {
    return this.authService.isAuthenticated().pipe(map(isLoggedIn => {
      console.log('isLoggedIn', isLoggedIn);
      if (isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }), catchError(error => {
      return of(error);
    }));
  }

}
