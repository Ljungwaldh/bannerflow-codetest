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

  getPosts(subreddit: string, entries: string):Observable<any> {
    return this.http.get<any>(`${this.baseURL}${subreddit}.json?limit=${entries}`)
    .pipe(map(response => {
      var subredditArray:Post[] = [];
      let dataArray:Post = response.data.children;
      console.log(dataArray, 'dataArray');
      for (let i of dataArray[Symbol.iterator]()) {
        this.subreddits.title = dataArray[i].data.title;
        this.subreddits.id = dataArray[i].data.id;
        this.subreddits.thumbnail = dataArray[i].data.thumbnail;
        this.subreddits.num_comments = dataArray[i].data.num_comments;
        this.subreddits.author = dataArray[i].data.author;
        this.subreddits.created = dataArray[i].data.created;
        this.subreddits.score = dataArray[i].data.score;
        this.subreddits.permalink = dataArray[i].data.permalink;
        this.subreddits.selftext = dataArray[i].data.selftext;
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
