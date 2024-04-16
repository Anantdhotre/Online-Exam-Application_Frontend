import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  validateUser(user: User):Observable<boolean>
  {
    return this.httpClient.post<boolean>("http://localhost:8080/validate",user);
  }
}
