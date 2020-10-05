import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  fetchPosts(subreddit:string, postCount:number):Observable<Post[]> {
    return this.http.get<Post[]>(`https://www.reddit.com/r/${subreddit}.json?limit=${postCount}`)
    .pipe(map(data => {
      const postsArray: Post[] = [];
      let children = data.children.data;
      for (var i=0; i<children.length) {
        let post:Post = new Post()
        post.title = children[i].data.title;
        post.id = children[i].data.id;
        post.thumbnail = children[i].data.thumbnail;
        post.created = children[i].data.created;

      }
      return postsArray;
    } ))
  }
