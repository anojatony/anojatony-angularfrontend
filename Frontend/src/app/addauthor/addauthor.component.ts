import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  authors={
    author:'',
    content:'',
    image:''
}

  constructor(private authorService:AuthorserviceService, private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
  }
  selectImage(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.authors.image=file;
    }
     }
   
     addAuthor(){
       const formData=new FormData();
       formData.append('image', this.authors.image)
       formData.append('author',this.authors.author)
       formData.append('content',this.authors.content)
       this.authorService.newAuthor(formData);
       console.log("Called");
       alert("Author added Successfully");
       this.router.navigate(['authors']);
     }
   
     logoutUser()
     {
     localStorage.removeItem('token')
     this.router.navigate(['login'])
     }
}
