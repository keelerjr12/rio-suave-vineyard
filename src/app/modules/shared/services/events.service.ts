import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private API_URL = '/api/events';

  constructor(private http: HttpClient) { }

  public getAllEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(environment.baseUrl + this.API_URL);
  }
}
