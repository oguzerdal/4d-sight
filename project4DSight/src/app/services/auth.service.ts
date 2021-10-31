import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  constructor() { }

  isAuthenticated() {
    return this.loggedIn;
  }

  canSeeUserListing(){
    return true
  }
  
  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
  
}
