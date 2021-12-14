import { Component } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Authors, BlogPosts } from '../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-amplify2';
  authors: Authors[] = [];
  posts: BlogPosts[] = [];

  async ngOnInit() {
    const author1 = await DataStore.save(
      new Authors({
        "name": "Dan Brown",
        "BlogPosts": []
      })
    );
    console.log('author1:', author1); 
    const authorID1 = author1.id;

    const author2 = await DataStore.save(
      new Authors({
        "name": "Steven King",
        "BlogPosts": []
      })
    );
    console.log('author2:', author2); 
    const authorID2 = author2.id;
    
    const post1 = await DataStore.save(
      new BlogPosts({
        "post": "Welcome everyone!",
        "authorsID": authorID1
      })
    );
    console.log('post1:', post1);
    
    const post2 = await DataStore.save(
      new BlogPosts({
        "post": "Still alive and kicking!",
        "authorsID": authorID2
      })
    );
    console.log('post2:', post2);  
  }

  async queryAuthors() {
    const authorsQuery = await DataStore.query(Authors);
    console.log(authorsQuery);
    this.authors = authorsQuery;
  }

  async queryPosts() {
    const postsQuery = await DataStore.query(BlogPosts);
    console.log(postsQuery);
    this.posts = postsQuery;
  }

}
