import { Injectable } from '@angular/core';
import { LoginService } from './login.services';
import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  token:any;
  // private URL = 'http://localhost:7000/api/orders';
  private EP = "/api/orders";
  private URL = environment.serverAPI + this.EP;

  constructor(private http:HttpClient) { }

  makeOrder(order: any) {
    return this.http.post(this.URL, order);
  }
  getAllOrders() {
    console.log("dakhl l order service")
    return this.http.get(this.URL);
  }
}
