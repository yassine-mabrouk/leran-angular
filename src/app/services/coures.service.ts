import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouresService {
   

  constructor() { }

  getCourses(){
    return ["angular","laravel","react","vuejs"];
  }
}
