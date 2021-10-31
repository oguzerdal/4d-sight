import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userRole:string;
  isAuthorized:boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
    if(this.userRole == "customer"){
      this.isAuthorized = false;
    }
    else{
      this.isAuthorized = true;
    }
  }
}
