import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../model/post-model'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private http: HttpClient, private apiService: ApiService) { }

  ngOnInit(): void {
    }

    onFetchPosts() {
      this.apiService.getPosts('sweden', '25').subscribe((resp) => {
        const postsArray: Post[] = [];
        let children = resp.data.children
        for (const i of children) {
          post.title = children[i].data.title;
          post.id = children[i].data.id;
          post.thumbnail = children[i].data.thumbnail;
          post.created = children[i].data.created;
          post.num_comments = children[i].data.num_comments;
          post.author = children[i].data.author;
          post.score = children[i].data.score;
          post.permalink = children[i].data.permalink;
          post.url = children[i].data.url;
          post.selftext = children[i].data.selftext;
          postsArray.push(i);
        }
        return postsArray;
      })
    }

  }
