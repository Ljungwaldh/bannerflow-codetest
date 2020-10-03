import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './post.model';

@Injectable ({providedIn:'root'})

export class PostsService {

    constructor(private http: HttpClient) {}

    fetchPosts() {
        
    }
}