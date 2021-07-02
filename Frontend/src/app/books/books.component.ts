import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:String="Book List";

  constructor(private bookService:BookserviceService, private router:Router, public _auth:AuthService) { }

  books=[{
    title:'',
    author:'',
    genre:'',
    content:'',
    image:''
}]


  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
    this.books=JSON.parse(JSON.stringify(data));
    })
  }
  editBook(book:any)
  {
    localStorage.setItem("editbookid", book._id.toString());
    this.router.navigate(['updatebook']);

  }

  deleteBook(book:any){
    this.bookService.deleteBook(book._id)
    .subscribe((data) => {
    this.books = this.books.filter(p => p !== book);
      })
     this.router.navigate(['books']);  
  
  }

  singleBook(book:any){
    localStorage.setItem("singlebook", book._id.toString());
    this.router.navigate(['singlebook']);
  }

   logoutUser()
  {
  localStorage.removeItem('token')
  this.router.navigate(['login'])
  }
  
}
