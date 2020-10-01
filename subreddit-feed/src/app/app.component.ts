import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'https://www.reddit.com/r/sweden.json';
  items = [];

  constructor(private http: HttpClient){
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
    }

    )
  }
}
