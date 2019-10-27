import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RSEvent } from './rs-event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private API_URL = '/api/events';

  constructor(private http: HttpClient) { }

  public getAllEvents(): Observable<RSEvent[]> {
    return this.http.get<RSEvent[]>(environment.baseUrl + this.API_URL);
  }

  public addEvent(event: RSEvent): Observable<RSEvent> {
    return this.http.post<RSEvent>(environment.baseUrl + this.API_URL, event);
  }
}
