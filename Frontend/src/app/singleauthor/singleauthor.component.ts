import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-singleauthor',
  templateUrl: './singleauthor.component.html',
  styleUrls: ['./singleauthor.component.css']
})
export class SingleauthorComponent implements OnInit {

  author={
    author:'',
    content:'',
    image:''
  }

  constructor(private authorService:AuthorserviceService,private router:Router, public _auth:AuthService) { }

  ngOnInit(): void {
    let authorid = localStorage.getItem("singleauthor");
    this.authorService.getAuthor(authorid).subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data));
  })
  }

  logoutUser()
  {
  localStorage.removeItem('token')
  this.router.navigate(['login'])
  }
  
}
