import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../_models/blogPost';
import { BlogPostService } from '../_services/blog-post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[];

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(){
    this.blogPostService.getPosts().subscribe(blogPosts => {
      this.blogPosts = blogPosts;
    })
  }

}
