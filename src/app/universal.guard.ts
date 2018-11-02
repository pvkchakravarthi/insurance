import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate, CanDeactivate<any> {

  constructor(private router: Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let allow = false;
      if(sessionStorage.getItem('logged') === 'true'){
        allow = true;
      }else{
        this.router.navigate(['login','Logged User can access this page']);
      }
    return allow;
  }

  canDeactivate(component:any, currRoute:ActivatedRouteSnapshot, currState: RouterStateSnapshot): boolean
  {
    return window.confirm('Are you sure to logout');
  }
}
