import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-updateauthors',
  templateUrl: './updateauthors.component.html',
  styleUrls: ['./updateauthors.component.css']
})
export class UpdateauthorsComponent implements OnInit {

  authors={
    author:'',
    content:'',
    image:''
  }


  constructor(private authorService:AuthorserviceService, private router:Router, public _auth:AuthService) { }

  ngOnInit(): void {
    let authorid = localStorage.getItem("editauthorid");
    this.authorService.getAuthor(authorid).subscribe((data)=>{
    this.authors=JSON.parse(JSON.stringify(data));
  })
  }

  selectImage(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.authors.image=file;
    }
     }

  updateAuthor(authors:any){
    authors=authors._id
    const formData=new FormData();
    formData.append('image', this.authors.image)
    formData.append('author',this.authors.author)
    formData.append('content',this.authors.content)
    formData.append('id',authors)
    this.authorService.editAuthor(formData);   
    alert("Details updated Successfully");
    this.router.navigate(['/authors']);
  }
  
  logoutUser()
  {
  localStorage.removeItem('token')
  this.router.navigate(['login'])
  }

}
