import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {

  users:User[];
  userId:string;
  userName:string;
  userRole:string;
  updatedUserId:string;
  updatedUserName:string;
  updatedUserRole:string;
  toggle:any;
  role:string;
  displayDialog:boolean = false;
  
  constructor(
    private userService: UserService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.role = this.userService.authenticatedUserRole;
    if(this.role == "admin"){
      this.users = JSON.parse(window.localStorage.getItem('users'));
      this.users = this.users.filter(user => user.role != "superadmin")
    }
    else{
      this.users = JSON.parse(window.localStorage.getItem('users'));
    }
  }

  addUser(){
    if(this.userRole && this.userName){
      this.displayDialog = !this.displayDialog;
      let generateId = Math.random().toString();
      let newUser = {id:generateId,name:this.userName,role:this.userRole}
      this.users = JSON.parse(window.localStorage.getItem('users'));
      this.users.push(newUser);
      window.localStorage.setItem('users', JSON.stringify(this.users));
      if(this.role == "admin"){
      this.users = this.users.filter(user => user.role != "superadmin")
      }
      this.userName = null;
      this.userRole = null;
    }
    else{
      this.displayDialog = !this.displayDialog;
    }
  }

  editUser(user:User,i){
    console.log(user)
    this.toggle == i ? this.toggle = null : this.toggle = i
    this.updatedUserId = user.id;
    this.updatedUserRole = user.role;
    this.updatedUserName = user.name;

  }

  editCancel(){
    this.toggle = null;
  }

  addCancel(){
    this.displayDialog = false;
  }

  saveChanges(){
    const unchangedUser:User = this.users.find(user => user.id = this.updatedUserId)
    const updatedUser:User =  {id:this.updatedUserId, name:this.updatedUserName, role:this.updatedUserRole}
    this.users = JSON.parse(window.localStorage.getItem('users'));
    this.users = this.users.filter(user => user.id != unchangedUser.id )
    this.users.push(updatedUser)
    window.localStorage.setItem('users', JSON.stringify(this.users));
    if(this.role == "admin"){
    this.users = this.users.filter(user => user.role != "superadmin")}
    this.toggle = null;
  }
  
  deleteUser(user:User){
    this.users = this.users.filter(i => i.id != user.id)
    console.log(this.users)
    window.localStorage.setItem('users', JSON.stringify(this.users))
    this.users = this.users.filter(user => user.role != "superadmin")
  }

  logout(){
    this.authService.logout()
  }

}
