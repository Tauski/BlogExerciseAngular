import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/_models/blogPost';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() blogPost: BlogPost;

  constructor() { }

  ngOnInit(): void {
  }

}
