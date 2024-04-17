import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  // private URL = 'http://localhost:7000/api/event';
  private EP = "/api/event";
  private URL = environment.serverAPI + this.EP;


  constructor(private http: HttpClient) {}

  GetAllEvents() {
    return this.http.get(this.URL);
  }

  GetEventById(id: Number) {
    return this.http.get(this.URL + '/' + id);
  }

  GetPromotedEvets() {
    return this.http.get(this.URL + '/promoted');
  }

  GetEventByCategoryName(name: string) {
    return this.http.get(this.URL + '/category/' + name);
  }
  AddEvent(event: any): Observable<any> {
    return this.http.post(this.URL, event, { observe: 'response' });
  }
  UpdateEvent(id:any, event:any) {
    return this.http.put(this.URL+ '/' +id, event);
  }
  DeleteEvent(id:any){
    return this.http.delete(this.URL+'/'+id);
  }
}
