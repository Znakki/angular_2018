import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup(
    {
      login: new FormControl(),
      password: new FormControl()
    });

  constructor(private authService: AuthService, private  router: Router, private appService: AppService) {
  }

  ngOnInit() {
  }


  public sendLoginData() {
    this.appService.isSpinnerChecked(true);
    this.authService.logIn(this.form.value).subscribe(_ => {
      this.form.reset();
      this.router.navigate(['/courses']);
      this.appService.isSpinnerChecked(false);
    });
  }
}
