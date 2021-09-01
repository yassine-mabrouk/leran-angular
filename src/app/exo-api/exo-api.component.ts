import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-api',
  templateUrl: './exo-api.component.html',
  styleUrls: ['./exo-api.component.css']
})
export class ExoApiComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getFacebookFreinds();
  }
   
  getFacebookFreinds(){
  this.http.get("https://jsonplaceholder.typicode.com/users")
  .subscribe((res:Response)=> {
    console.log(res)
  }, err => {console.log("Cannot get facebook friends  ")
             console.log(err);
})
  }
}
