import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedChecked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isTokenExist());

  private tokenData: any;
  constructor(private http: HttpClient) {
  }

  private getToken() {
    return this.http.get<object>(`${BASE_URL}`);
  }

  public async logIn(userName, userPassword) {
    if (userName === 'admin' || userName === 'mentor') {
      this.tokenData = await this.getToken().toPromise();
      localStorage.setItem('userName', userName);
      localStorage.setItem('userPassword', userPassword);
      localStorage.setItem('token', this.tokenData.token);
      this.isAuthenticatedChecked.next(true);
    }
  }

  public logOut() {
    this.isAuthenticatedChecked.next(false);
    localStorage.clear();
    console.log('logOut method works');
  }

  private isTokenExist(): boolean {
    return !!localStorage.getItem('userName') && localStorage.getItem('userName') !== 'null' && localStorage.getItem('token') === 'PASSED';
  }
  public isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedChecked.asObservable();
  }


  public getUserInfo() {
    console.log('getUserInfo method works');

  }
}
