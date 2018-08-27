import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userData: object = {
    first: '',
    last: ''
  };

  public status: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
  this.authService.isAuthenticated().subscribe(status => {
    if(status){
      this.status = status;
        this.authService.getUserInfo().subscribe(data => {
        this.userData =  data.name
        });
    } else {
      this.status = status;
    }

  })
  }

  public logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
