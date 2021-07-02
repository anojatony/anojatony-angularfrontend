import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  books={
    id:'',
    title:'',
    author:'',
    genre:'',
    content:'',
    image:''
  }

  constructor(private bookService:BookserviceService, private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
  }

  selectImage(event:any){
 if(event.target.files.length>0){
   const file=event.target.files[0];
   this.books.image=file;
 }
  }

  addBook(){
    const formData=new FormData();
    formData.append('image', this.books.image)
    formData.append('title',this.books.title)
    formData.append('author',this.books.author)
    formData.append('genre',this.books.genre)
    formData.append('content',this.books.content)
    this.bookService.newBook(formData);
    console.log("Called");
    alert("Book added Successfully");
    this.router.navigate(['/books']);
  }

  logoutUser()
  {
  localStorage.removeItem('token')
  this.router.navigate(['login'])
  }

}
