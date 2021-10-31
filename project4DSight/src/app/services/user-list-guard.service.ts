import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class UserListGuardService implements CanActivate {

  constructor(
    private userService: UserService,
    private router:Router
    ){}
    
  canActivate(){
      if(this.userService.authenticatedUserRole != "customer" && this.userService.authenticatedUserRole ){
        console.log(this.userService.authenticatedUserRole)
          return true;
      }
      else{
          this.router.navigateByUrl('/login');
          return false;
      }
  }
}
