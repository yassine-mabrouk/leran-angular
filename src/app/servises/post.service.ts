import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './../post/post';
import { DataServise } from './data.service';
// inmporter les pakages pour manupiler les erreurs 


@Injectable({
  providedIn: 'root'
})
export class PostService  extends DataServise{

  constructor(http:HttpClient) { 
    super("https://jsonplaceholder.typicode.com/posts",http);
  }
 
}
