import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
 
  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get("http://localhost:8000/books")
  }

  newBook(book:any){
    return this.http.post("http://localhost:8000/addbook", book)
    .subscribe(data=>{console.log(data)})
    }

    getBook(id:any){
      return this.http.get("http://localhost:8000/book/"+id);
    }

    editBook(book:any){
      console.log('updated')
      return this.http.put("http://localhost:8000/updatebook",book)
      .subscribe(data =>{console.log(data)})
    }

    deleteBook(id:any){
      return this.http.delete("http://localhost:8000/delete/"+id)
    }

    // getSingleBook(id:any){
    //   return this.http.get("http://localhost:8000/singlebook/"+id)
    // }
}
