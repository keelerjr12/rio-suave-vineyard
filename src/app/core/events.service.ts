import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { RSEvent } from '../shared/interfaces/rs-event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private API_URL = '/api/events';

  private eventSubject = new Subject<RSEvent[]>();

  private events: RSEvent[];

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<RSEvent[]> {
    this.http.get<RSEvent[]>(environment.baseUrl + this.API_URL).pipe(map(events => {
      events.map(event => {
        event.dateTimeStart = new Date(event.dateTimeStart + 'Z');
        event.dateTimeEnd = new Date(event.dateTimeEnd + 'Z');
        return map;
      });

      return events;
    })).subscribe(events => {
      this.events = events;
      this.eventSubject.next(events);
    });

    return this.eventSubject.asObservable();
  }

  addEvent(event: RSEvent): Observable<void> {
    return this.http.post<string>(environment.baseUrl + this.API_URL, event).pipe(map(
      id => {
        event.id = id;
        this.events.push(event);
      }));
  }

  deleteEvent(id: string) {
    return this.http.delete<string>(environment.baseUrl + this.API_URL + '/' + id).pipe(map(() => {
        const idx = this.events.findIndex(e => e.id === id);
        this.events.splice(idx, 1);
      }));
  }

  // TODO: How to unsubscribe from obs???
}
