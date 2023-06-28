import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  response1: Observable<any>;
  response2: Observable<any>;
  constructor(private appService: AppService) {}

  getPost(postId) {
    this.response1 = this.appService.getPostById(postId);
  }

  getTodo(todoId) {
    this.response2 = this.appService.getTodoById(todoId);
  }
}