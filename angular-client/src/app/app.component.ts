import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Post } from './post.interface';
import { PostService } from './post.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-client';
  post!: string;
  posts: string[] = [];

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
    if (this.post) {
      this.postService.sendPost(this.post);
      this.post = '';
    }
  }

  // Method to fetch posts
  fetchPost() {
    this.postService.getPosts().subscribe((post: string) => {
      this.posts.push(post);
    });
  }

  // Method to fetch data
  fetchData() {
    this.apiService.getData().subscribe((data: Post[]) => {
      this.posts = data.map((post) => post.body);
    });
  }
}
