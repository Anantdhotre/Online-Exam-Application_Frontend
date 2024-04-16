import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user:User=new User('','',0,'');
  
  users:User[]=[];
  message:string="";

  constructor(private service:UserService)  {} 
  

  saveUser(){
    this.service.saveUser(this.user).subscribe();
  }

  updateUser(){
    this.service.updateUser(this.user).subscribe();
  }

  getAllUsers(){
     this.service.getAllUsers().subscribe(userarray=>this.users=userarray);
     
  }

  deleteUser(){
    this.service.deleteUser(this.user.username).subscribe(message=>this.message="object deleted");
  }

  getUser()
  {
    this.service.getUser(this.user.username).subscribe();
  }
 


}
