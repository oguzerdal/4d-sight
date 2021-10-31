import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user-model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  users: User[];
  username: string;
  successStatus: string = "";
  isLoginSuccess: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    if (JSON.parse(window.localStorage.getItem('users')) == null) {
      window.localStorage.setItem('users', JSON.stringify(this.users));
      this.users = JSON.parse(window.localStorage.getItem('users'));
    }
  }

  onSubmit() {
    this.users = JSON.parse(window.localStorage.getItem('users'));
    const isExistUser = this.users.filter(user => user.name == this.username).length > 0;
    if (isExistUser) {
      const user: User = this.users.find(user => user.name == this.username)
      this.successStatus = "You have successfully logged in.";
      this.isLoginSuccess = true;
      this.userService.setUserRole(user.role)
      this.authService.login()
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      }, 2000);

    }
    else {
      this.successStatus = "There is no such user.";
      this.isLoginSuccess = false;
    }
  }
}
