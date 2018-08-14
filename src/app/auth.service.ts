import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedChecked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isTokenExist());

  private tokenData: string;

  constructor(private http: HttpClient) {
  }

  public logIn(data) {
    return this.http.post<any>(`${BASE_URL}/login`, data).pipe(tap((res: any) => {
      console.log(res.token);
      localStorage.setItem('token', res.token);
      this.tokenData = res.token;
      this.isAuthenticatedChecked.next(true);
    }));
  }

  public logOut() {
    this.isAuthenticatedChecked.next(false);
    localStorage.clear();
    console.log('logOut method works');
  }

  private isTokenExist(): boolean {
    console.log(localStorage.getItem('token') === this.tokenData);
    return localStorage.getItem('token') === this.tokenData;
  }

  public isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedChecked.asObservable();
  }

  public getUserInfo() {
    const token = this.tokenData;
    return this.http.post<any>(`${BASE_URL}/userinfo`, {token});
  }

  public getAuthToken() {
    if (this.isTokenExist()) {
      return this.tokenData;
    }
  }
}
