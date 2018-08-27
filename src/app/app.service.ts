import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private isLoginActivate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public get isLoginActivate$(): Observable<boolean> {
    return this.isLoginActivate.asObservable();
  }

  public isAuthChecked(value: boolean) {
    this.isLoginActivate.next(value);
  }

  public get isSpinner$(): Observable<boolean> {
    return this.isSpinner.asObservable();
  }

  public isSpinnerChecked(value: boolean) {
    this.isSpinner.next(value);
  }
}
