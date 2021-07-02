import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(user:any){
    return this.http.post<any>("http://localhost:8000/login",user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken()
  {
    return localStorage.getItem('token')
  }

  constructor(private http:HttpClient) { }
}
