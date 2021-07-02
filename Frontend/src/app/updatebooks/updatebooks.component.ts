import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-updatebooks',
  templateUrl: './updatebooks.component.html',
  styleUrls: ['./updatebooks.component.css']
})
export class UpdatebooksComponent implements OnInit {

  books={
    title:'',
    author:'',
    genre:'',
    content:'',
    image:''
  }


  constructor(private bookService:BookserviceService, private router: Router, public _auth:AuthService) { }

  ngOnInit(): void {
    let bookid = localStorage.getItem("editbookid");
    this.bookService.getBook(bookid).subscribe((data)=>{
    this.books=JSON.parse(JSON.stringify(data));
  })
  }

  selectImage(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.books.image=file;
    }
     }

  updateBook(books:any){
    books=books._id
    const formData=new FormData();
    formData.append('image', this.books.image)
    formData.append('title',this.books.title)
    formData.append('author',this.books.author)
    formData.append('genre',this.books.genre)
    formData.append('content',this.books.content)
    formData.append('id',books)
    this.bookService.editBook(formData);   
    alert("Details updated Successfully");
    this.router.navigate(['/books']);
  }

  logoutUser()
  {
  localStorage.removeItem('token')
  this.router.navigate(['login'])
  }
  
  
}
