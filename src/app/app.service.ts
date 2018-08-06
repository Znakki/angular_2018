import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public get isAuth$(): Observable<boolean> {
    return this.isAuth.asObservable();
  }

  public isAuthChecked(value: boolean) {
    this.isAuth.next(value);
  }
}
