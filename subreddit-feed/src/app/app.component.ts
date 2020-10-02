import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  baseURL = 'https://www.reddit.com/r/';
  subreddit = 'sweden.json';
  query = '10'

  constructor(private http: HttpClient){
    this.http.get(this.baseURL).toPromise().then(data => {
      console.log(data);
    }
    )
  }
//   getPosts(subreddit, postCount): Observable <any> {
//     return this.http.get(`${this.baseURL}${subreddit}?limit=${postCount}`)
// }

// loadPosts() {
//   this.apiService.getPosts('funny', '6').subscribe((resp) => {
//       console.log(resp)
//   }
// ,}
}
