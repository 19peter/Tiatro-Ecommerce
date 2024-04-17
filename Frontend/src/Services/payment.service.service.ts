import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private http:HttpClient) { }
  // private URL = 'http://localhost:7000/api/payment';
  private EP = "/api/payment";
  private URL = environment.serverAPI + this.EP;

  Pay(totalPrice:any) {
    return this.http.post(this.URL+'/pay',{totalPrice});
  }


}
