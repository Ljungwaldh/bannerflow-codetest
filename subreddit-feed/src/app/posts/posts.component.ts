import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../model/post-model'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private apiService: ApiService) {
    loadPosts() {
      this.apiService.getPosts('sweden', '25').subscribe((resp) => {
        var postsArray:Post[] = []
        let children = resp.data.children
        for (let post of children) {
          post.title = children[post].data.title;
          post.id = children[post].data.id;
          post.thumbnail = children[post].data.thumbnail;
          post.created = children[post].data.created;
          post.num_comments = children[post].data.num_comments;
          post.author = children[post].data.author;
          post.score = children[post].data.score;
          post.permalink = children[post].data.permalink;
          post.url = children[post].data.url;
          post.selftext = children[post].data.selftext;
          postsArray.push(post);
        }
        return postsArray;
      })
    }
   }

  ngOnInit(): void {
  }

}
