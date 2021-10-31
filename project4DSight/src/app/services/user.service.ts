import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authenticatedUserRole:string;

  constructor() { }

  getUsers(){
    return users;
  }

  setUserRole(role:string){
    this.authenticatedUserRole = role;
    console.log(this.authenticatedUserRole)
  }

  getUserRole():string{
    return this.authenticatedUserRole
  }
  
}

export const users:User[] = [
  {id:'0.2146680153218369',name:"oguz",role:"superadmin"},
  {id:'0.6146650153218329',name:"ahmet",role:"admin"},
  {id:'0.9010680153218369',name:"pelin",role:"customer"},
  {id:'0.5146680156208060',name:"selim",role:"customer"},
  {id:'0.7222080753718369',name:"mahmut",role:"customer"},
]