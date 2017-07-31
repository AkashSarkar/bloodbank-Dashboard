import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataServiceService } from "./data-service.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private service:DataServiceService ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.service.getIsUserLoggedIn();
  }
}
