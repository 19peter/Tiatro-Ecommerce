import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  // private URL = 'http://localhost:7000/api/reviews';
  private EP = "/api/reviews";
  private URL = environment.serverAPI + this.EP;

  
  constructor(private http: HttpClient) {}
  
  AddReview(message: any) {
    return this.http.post(this.URL, message);
  }
  GetAllReviews() {
    return this.http.get(this.URL);
  }
}
