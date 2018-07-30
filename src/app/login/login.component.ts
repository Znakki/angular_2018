import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup(
    {
      userName: new FormControl(),
      userPassword: new FormControl()
    });

  constructor(private authService: AuthService, private  router: Router) {
  }

  ngOnInit() {
  }


  public sendLoginData() {
    this.authService.logIn(this.form.value.userName, this.form.value.userPassword);
    this.form.reset();
    this.authService.getUserInfo();
    this.router.navigate(['/courses']);
  }
}
