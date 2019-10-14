import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    }

    return false;
  }
}
