import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, Router} from '@angular/router';
import {AppService} from './app.service';
import {AuthService} from './auth.service';

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
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
