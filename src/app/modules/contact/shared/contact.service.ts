import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  send(name: string, email: string, comments: string): Observable<object> {
    console.log(name, email, comments);

    const body = {
      name,
      email,
      comments
    };

    return this.http.post(environment.baseUrl + '/api/contact', body);
  }
}
