import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  createNewUser(newUser:any){
    return this._http.post("http://localhost:8080/users/register",newUser)
  }
  
  login(user:any){
    return this._http.post("http://localhost:8080/users/login",user)
  }
}
