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

        if (event.imageUrl !== '') {
          event.imageUrl = environment.baseUrl + '/' + event.imageUrl;
        }

        return map;
      });

      return events;
    })).subscribe(events => {
      this.events = events;
      this.eventSubject.next(events);
    });

    return this.eventSubject.asObservable();
  }

  addEvent(event: RSEvent, formData: FormData): Observable<void> {

    /*const blobOverrides = new Blob([JSON.stringify(event)], {
      type: 'application/json',
    });

    formData.append('EventJsonInput', blobOverrides);*/
    formData.append('EventJsonInput', JSON.stringify(event));
    formData.forEach(e => { console.log(e); });

    /*return this.http.post<void>(environment.baseUrl + this.API_URL, formData);
    /*.subscribe(res => {
      console.log(res);
      //this.uploadedFilePath = res.data.filePath;
      alert('SUCCESS !!');
    })
*/

    return this.http.post<string>(environment.baseUrl + this.API_URL, formData).pipe(map(
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
