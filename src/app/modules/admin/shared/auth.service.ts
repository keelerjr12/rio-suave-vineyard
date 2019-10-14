import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    return true;
  }

  public login(username: string, password: string) {

  }

  public logout() {

  }
}
