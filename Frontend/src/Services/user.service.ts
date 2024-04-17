import { LoginService } from './login.services';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../Interfaces/jwt-payload';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userID: any;
  private token: any;
  // private URL = 'http://localhost:7000/api/users';
  private EP ="/api/users";
  private URL = environment.serverAPI + this.EP;

  constructor(private http: HttpClient, private loginService: LoginService) {}
  GetUserByID() {
    this.token = this.loginService.getToken();
    if (this.token) {
      const decoded = jwtDecode(this.token);
      this.userID = Object.values(decoded)[0];
    }
    return this.http.get(this.URL + '/' + this.userID);
  }
  GetAllUsers(){
    return this.http.get(this.URL);
  }
  AddItemToCart(item: any) {
    this.token = this.loginService.getToken();
    // console.log(this.token);
    let userID;
    if (this.token) {
      const decoded = jwtDecode(this.token) as JwtPayload;
      const { userID: id } = decoded;
      userID = id;
    }
    return this.http.post(this.URL + '/' + userID + '/cart', item);
  }

  getCart(id: Number) {
    return this.http.get(this.URL + '/' + id + '/cart');
  }

  deleteFromCart(cartItem: any) {
    this.token = this.loginService.getToken();
    const item = cartItem;
    let userId;

    if (this.token) {
      const decoded = jwtDecode(this.token) as JwtPayload;
      const { userID: id } = decoded;
      userId = id;
    }

    return this.http.put(this.URL + '/' + userId + '/cart', item);
  }

  EditProfile(user: any): Observable<any> {
    if (this.token) {
      const decoded = jwtDecode(this.token);
      this.userID = Object.values(decoded)[0];
    }
    return this.http.put(this.URL + '/' + this.userID, user, {
      observe: 'response',
    });
  }
}
