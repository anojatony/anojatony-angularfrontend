import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {

  book={
    title:'',
    author:'',
    genre:'',
    content:'',
    image:''
  }

  constructor(private bookService:BookserviceService,private router:Router, public _auth:AuthService) { }

  ngOnInit(): void {
    let bookid = localStorage.getItem("singlebook");
    this.bookService.getBook(bookid).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }

  logoutUser()
  {
  localStorage.removeItem('token')
  this.router.navigate(['login'])
  }
  
  
}
