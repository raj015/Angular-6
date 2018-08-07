import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(private http:Http) { }
  getPosts(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts')
   .pipe(map(result=>result.json()));
    }
  addPost(post){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',post)
    .pipe(map(res=>res.json()));
  }
  deletePost(id){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id)
    .pipe(map(res=>res.json()));
  }
  editPost(post){
    return this.http.put('https://jsonplaceholder.typicode.com/posts/'+post.id,post)
    .pipe(map(res=>res.json()));
  }
  
// Users Api
getUsers(){
  return this.http.get('https://jsonplaceholder.typicode.com/users')
  .pipe(map(result=>result.json()));
   }

   getPostsByUser(userID){
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+userID)
    .pipe(map(result=>result.json()));
     }
}


