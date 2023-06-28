import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
  constructor(public http: HttpClient) {}

  getPostById(postId): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    return this.http.get(url, { observe: "body" });
  }

  getTodoById(todoId): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    return this.http.get(url, { observe: "body" });
  }
}