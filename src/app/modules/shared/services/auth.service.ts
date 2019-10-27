import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = '/api/auth';

  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {

    const token = this.getAuthenticationToken();

    if (token === null) {
      return false;
    }

    return true;
  }

  public getAuthenticationToken(): string {
    const token = localStorage.getItem('token');
    return token;
  }

  public login(username: string, password: string): Observable<void> {
    return this.http.post<IAuthResponse>(environment.baseUrl + this.API_URL, {username, password}).pipe(map(
      resp => {
        localStorage.setItem('token', resp.token);
    }));
  }

  public logout() {

  }
}
