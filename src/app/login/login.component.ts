import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { User } from '../user.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  message:any="";
  subject:any="";
  user:User=new User('','',0,'');

  constructor(private loginService:LoginService, private router:Router){}

  validate()
  {
    this.loginService.validateUser(this.user).subscribe(answer=>{
      
      if(answer)
      {
        this.router.navigate(['question']);
        sessionStorage.setItem("username",this.user.username);
        sessionStorage.setItem("subject",this.subject);
      }
      else
      {
        this.router.navigate(['login']);
        this.message="wrong credentials";
      }
 
        
    });
  }

}
