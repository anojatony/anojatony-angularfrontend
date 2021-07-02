import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorserviceService {

  constructor(private http:HttpClient ) {}

  getAuthors(){
    return this.http.get("http://localhost:8000/authors")
  }

  newAuthor(author:any){
    return this.http.post("http://localhost:8000/addauthor", author)
    .subscribe(data=>{console.log(data)})
    }

    getAuthor(id:any){
      return this.http.get("http://localhost:8000/author/"+id);
    }

    editAuthor(author:any){
      console.log('updated')
      return this.http.put("http://localhost:8000/updateauthor",author)
      .subscribe(data =>{console.log(data)})
    }

    deleteAuthor(id:any){
      return this.http.delete("http://localhost:8000/deleteauthor/"+id)
    }

}
