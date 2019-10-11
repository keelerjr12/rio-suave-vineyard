import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class MailingListService {

  MAILING_LIST_API_URL = '/api/mailinglist';

  constructor(private http: HttpClient) { }

  subscribe(email: string): Observable<object> {
    const apiUrl = environment.baseUrl + this.MAILING_LIST_API_URL;
    console.log(email);
    const body = {
      address: email
    };

    return this.http.post(apiUrl, body);
  }
}
