import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthorizationService } from "../service/authorization.service";

@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate{
    
    constructor(private authorizationService: AuthorizationService, private router:Router){}

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean|UrlTree{
      if (this.authorizationService.user!=undefined) return true;
      
      return this.router.createUrlTree(['/auth']); 
    }

}