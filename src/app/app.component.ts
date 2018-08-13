import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {

  constructor(private appService: AppService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.ngAfterViewChecked();
  }

  get isLoginActivate(): Observable<boolean> {
    return this.appService.isLoginActivate$;
  }

  get isSpinner(): Observable<boolean> {
    return this.appService.isSpinner$;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
