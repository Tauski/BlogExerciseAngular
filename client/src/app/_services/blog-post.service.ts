import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogPost } from '../_models/blogPost';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  baseUrl = environment.apiUrl;
  blogPosts: BlogPost[] = [];

  constructor(private http: HttpClient) {}

  getPosts(){
    return this.http.get<BlogPost[]>(this.baseUrl + 'posts')
  }

  getPost(postId: string){
    return this.http.get<BlogPost>(this.baseUrl + 'posts/' + postId);
  }
}
