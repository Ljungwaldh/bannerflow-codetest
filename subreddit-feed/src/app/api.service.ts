import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './model/post-model'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts(subreddit, postCount):Observable<Post[]> {
    return this.http.get<Post[]>(`https://www.reddit.com/r/${subreddit}.json?limit=${postCount}`)
    
  }
}
