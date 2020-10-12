import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
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
  subreddits : Post

  getPosts(subreddit: string, entries: string):Observable<Post[]> {
    return this.http.get<any>(`${this.baseURL}${subreddit}.json?limit=${entries}`)
    .pipe(map(response => {
      var subredditArray:Post[] = []
      var dataArray:Post = response.data.children;
      for (let i in dataArray) {
        this.subreddits.title = dataArray[i].title;
        this.subreddits.id = dataArray[i].id;
        this.subreddits.thumbnail = dataArray[i].thumbnail;
        this.subreddits.num_comments = dataArray[i].num_comments;
        this.subreddits.author = dataArray[i].author;
        subredditArray.push(this.subreddits);

      }
      console.log(subredditArray)
      return subredditArray;
    }))
    // .pipe(response => {
    //   let responseArray:Post[] = response.data.children;
    //   for (let post in response.data.children) {
    //     responseArray.title = post.title
    //   }
    //   console.log(responseArray);
    //   return responseArray;
    // })
  }
}
