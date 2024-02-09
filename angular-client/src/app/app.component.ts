import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Post } from './post.interface';
import { PostComponent } from "./post/post.component";
import { PostService } from './post.service';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NgForOf, FormsModule, PostComponent, HttpClientModule]
})
export class AppComponent {
  title = 'angular-client';
  content!: string;
  post!: Post;
  posts: Post[] = [];

  // Inject the PostService and ApiService in the constructor
  constructor(
    private postService: PostService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.fetchPost();
    this.fetchData();
  }

  // Method to send a new post
  sendPost() {
    if (this.content) {
      this.postService.sendPost({ body: this.content, timestamp: new Date() });
      this.content = '';
    }
  }

  // Method to fetch posts
  fetchPost() {
    this.postService.getPosts().subscribe((post: Post) => {
      this.posts.push(post);
    });
  }

  // Method to fetch data
  fetchData() {
    this.apiService.getData().subscribe((data: Post[]) => {
      this.posts = data.map((post) => post);
    });
  }
}
