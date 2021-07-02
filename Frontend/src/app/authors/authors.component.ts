import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorserviceService } from '../authorservice.service';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private authorService:AuthorserviceService, private router:Router, public _auth:AuthService) { }

  
  authors=[{
    author:'',
    content:'',
    image:''
}]


  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
    this.authors=JSON.parse(JSON.stringify(data));
    })
  }

  editAuthor(author:any)
  {
    localStorage.setItem("editauthorid", author._id.toString());
    this.router.navigate(['updateauthor']);

  }

  deleteAuthor(author:any){
    this.authorService.deleteAuthor(author._id)
    .subscribe((data) => {
    this.authors = this.authors.filter(p => p !== author);
      })
     this.router.navigate(['authors']);  
  
  }

  singleAuthor(author:any){
    localStorage.setItem("singleauthor", author._id.toString());
    this.router.navigate(['singleauthor']);
  }

  logoutUser()
  {
  localStorage.removeItem('token')
  this.router.navigate(['login'])
  }

}



