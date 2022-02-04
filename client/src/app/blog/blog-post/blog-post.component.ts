import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/_models/blogPost';
import { BlogPostService } from 'src/app/_services/blog-post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input() blogPost: BlogPost;
  id: number;

  constructor(private blogPostService: BlogPostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.blogPostService.getPost(this.id).subscribe(blogPost => {
      this.blogPost = blogPost;
    })
  }
}
