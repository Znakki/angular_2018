import {Component} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appService: AppService) {
  }

  get isLoginActivate(): Observable<boolean> {
    return this.appService.isLoginActivate$;
  }

  get isSpinner(): Observable<boolean> {
    return this.appService.isSpinner$;
  }
}
