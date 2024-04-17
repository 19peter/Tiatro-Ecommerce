import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  // private URL = "http://localhost:7000/api/register";
  private EP = "/api/register";
  private URL = environment.serverAPI + this.EP;


  //sign up
  signUp(user: any): Observable<any> {
    return this.http.post(this.URL, user, { observe: 'response' });
  }

  // GetPromotedEvets(){
  //   return this.http.get(this.URL + "/promoted")
  // }
}
