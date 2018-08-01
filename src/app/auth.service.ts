import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private tokenData: any;
  constructor(private http: HttpClient) {
  }

  private getToken() {
    return this.http.get<object>(`${BASE_URL}`);
  }

  public async logIn(userName, userPassword) {
    if (userName === 'admin'|| userName === 'mentor') {
      this.tokenData = await this.getToken().toPromise();
      localStorage.setItem('userName', userName);
      localStorage.setItem('userPassword', userPassword);
      localStorage.setItem('token', this.tokenData.token);
    }
  }

  public logOut() {
    localStorage.clear();
    console.log('logOut method works');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('userName') && localStorage.getItem('userName') !== 'null' && localStorage.getItem('token') === 'PASSED';
  }

  public getUserInfo() {
    console.log('getUserInfo method works');

  }
}
