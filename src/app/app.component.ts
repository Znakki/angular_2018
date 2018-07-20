import {Component} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appService: AppService) {
  }

  get isAuth(): Observable<boolean> {
    return this.appService.isAuth$;
  }
}
