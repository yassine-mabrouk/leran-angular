import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServise } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends DataServise {

  constructor(  http:HttpClient) { 
    super("https://jsonplaceholder.typicode.com/users",http);
  }
}
