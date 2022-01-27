import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    //requesturile sunt observable si ca sa fie bagate in seama trebuie sa aibe pe cineva care da subscribe la acest observable
    this.http.post("https://angular-http-tutorial-b4071-default-rtdb.europe-west1.firebasedatabase.app/posts.json", postData)
    .subscribe(
      responseData => {
        console.log(responseData);
      }
    );
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    
  }

  fetchPosts() {
    this.http
    .get<{[key: string]: { title: string; content: string }}>("https://angular-http-tutorial-b4071-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
    .pipe(map(
      (responseData) => {
        const postsArray = [];
        for(const key in responseData) {
          if(responseData.hasOwnProperty(key)){
            postsArray.push({...responseData[key], id: key})
          }
        }
        return postsArray;
      }
    ))
    .subscribe(
      posts => {
        console.log(posts);
      }
    );
  }
}
