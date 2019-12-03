import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
    String.prototype['capitalize'] = function() {
      return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  };
   }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(map(
      posts => {
        function capitalize(str) {
          return str.replace(/\w\S*/g, function(txt){
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          });
      }
        return posts.map(post => ({
            ...post,
            title: capitalize(post.title)
        }));
    }
    ),catchError(()=> {return empty();}));
  }

  getPostDetail(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id)
  }


  getPostsByWord(word: string): Observable<Array<Post>> {
    word = word.toLowerCase();
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map(posts => posts.filter(p => {
        return p.title.toLowerCase().includes(word) || p.body.toLowerCase().includes(word)
      }))
      ,catchError(()=> {return empty();}));
  }
}
