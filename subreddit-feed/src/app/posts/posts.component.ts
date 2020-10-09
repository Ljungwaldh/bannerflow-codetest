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
      this.apiService.getPosts('sweden', '25').subscribe(response =>
        console.log(response))
      }
    }
