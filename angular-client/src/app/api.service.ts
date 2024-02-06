import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.interface';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
// TODO: Add error handling to the API service.
export class ApiService {
  constructor(private http: HttpClient) { }
  // Using the http client to make a GET request to the API endpoint and fetches the posts.
  getData(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.socketUrl + '/api/posts');
  }
}
