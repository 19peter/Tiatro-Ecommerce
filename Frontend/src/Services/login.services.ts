import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // private URL = 'http://localhost:7000/api/login';
  private EP = "/api/login"
  private URL = environment.serverAPI + this.EP;


  http = inject(HttpClient);
  constructor() {}

  //sign in
  signIn(user: any): Observable<any> {
    return this.http.post(this.URL, user, { observe: 'response' });
  }

  GetPromotedEvets() {
    return this.http.get(this.URL + '/promoted');
  }

  getToken() {
    const token = localStorage.getItem('access_token');
    return token;
  }

  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('access_token');
  //   return !this.jwtHelper.isTokenExpired(token);
  // }
}
