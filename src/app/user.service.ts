import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private httpclient:HttpClient) { }

  saveUser(user:User){

    return this.httpclient.post("http://localhost:8080/saveUser",user)

    
  }

  updateUser(user:User){

    return this.httpclient.post("http://localhost:8080/updateUser",user)
  }

  getAllUsers(){

    return this.httpclient.get<User[]>("http://localhost:8080/getAllUsers");
  }

  deleteUser(username:string){

    return this.httpclient.delete("http://localhost:8080/deleteUser/"+username);

  }
  getUser(username: string) {
    
    return this.httpclient.delete("http://localhost:8080/getUser/"+username);

  }
  
}


export class User
{
  username:string;
  password:string;
  mobno:number;
  emailid:string;

  public constructor(username:string,password:string,mobno:number,emailid:string)
  {
    
    this.username=username;
    this.password=password;
    this.mobno=mobno;
    this.emailid=emailid;
  }
  
}