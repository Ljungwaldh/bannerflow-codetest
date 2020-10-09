import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './model/post-model'
import { PostsComponent } from './posts/posts.component';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }
  private baseURL = 'https://www.reddit.com/r/';
  postsArray : Post[] = [];

  getPosts(subreddit: string, entries: string):Observable<any> {
    return this.http.get(`${this.baseURL}${subreddit}.json?limit=${entries}`)
    .pipe(map(response => {
      let children = response[0].data.children;
      for (let key in response) {
        if(response.hasOwnProperty(key)){
          this.postsArray.push(response[key]);
        }
      }
      console.log(this.postsArray);
      return response
    }))
  }
}
