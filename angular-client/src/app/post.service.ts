import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post } from './post.interface';
import { environment } from '../environments/environment.development';
import io from 'socket.io-client';

// PostService is a service for sending and receiving posts via a WebSocket connection.
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private socket;

  // Initializes the socket connection.
  constructor() {
    this.socket = io(environment.socketUrl);
  }

  // sendPost is a method that sends a new post to the server via the WebSocket connection.
  public sendPost(post: Post): void {
    if (this.socket.connected) {
      this.socket.emit('new-post', post);
    } else {
      console.error('Cannot send post, socket is not connected.');
    }
  }

  // This Observable emits a new value whenever a new post is received from the server.
  public getPosts(): Observable<Post> {
    return new Observable((observer: Observer<Post>) => {
      this.socket.on('new-post', (post: Post) => {
        observer.next(post);
      });
    })
  }
}
