import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './model/post-model'
import { PostsComponent } from './posts/posts.component';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }
  private baseURL = 'https://www.reddit.com/r/'

  getPosts(subreddit: string, entries: string):Observable<any> {
    return this.http.get(`${this.baseURL}${subreddit}?limit=${entries}`)
  }
}
