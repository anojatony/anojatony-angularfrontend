import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService:UserService, private router:Router){}

  ngOnInit(): void {
  }

  registerForm = this.fb.group(
    {
      firstname:['',[Validators.required,Validators.pattern('^[a-zA-Z\s]+$')]],
      lastname:['',[Validators.required, Validators.pattern('^[a-zA-Z\s]+$')]],
      email:['', [Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password:['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      phone:['',[Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$')]],
      address:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9\s.-/]+$')]]
    }
  )

  signUser(){
  // console.log(this.registerForm.value)
  this.userService.newUser(this.registerForm.value)
  console.log("called")
  alert("Registered Successfully");
  this.router.navigate(['login']);
  }
}
