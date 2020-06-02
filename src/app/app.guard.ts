import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppGuard implements CanActivate {

  constructor(private router : Router ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //  if( somtheing ) {return true} // yes . let the user go to the wished route
      //  else {
        // return this.router.createUrlTree(['/login']);  //reroute the user
      //  }

    return true;
    
  }

  
}
