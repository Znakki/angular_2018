import {Component, OnChanges, OnInit} from '@angular/core';
import {User} from '../interfaces/user.interface';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userData: object = {
    first: '',
    last: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  this.isAuthenticated.subscribe(res => {
    if (res) {
      this.authService.getUserInfo().subscribe(res => this.userData = res.name);
    }
  })
  }

  public logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  get isAuthenticated(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }

}
