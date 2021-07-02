import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    email:'',
    password:''
  }
  invalidLogin: boolean=false;

  constructor(private _auth:AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._auth.loginUser(this.user)
.subscribe(
  res => {
    
    if(res.token){
    localStorage.setItem('token', res.token)
    this._router.navigate(['/home'])
    }
    else if(res.user){
      this._router.navigate(['/home'])
    }
  },
  err => {
    console.log(err);
    // this._router.navigate(['login'])
  }
) 
  }
  
 
}
