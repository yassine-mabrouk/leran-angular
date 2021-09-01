import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExoApiService } from './../service/exo-api.service';
import { PostService } from './../servises/post.service';
import { UsersService } from './../servises/users.service';

@Component({
  selector: 'app-api-exo',
  templateUrl: './api-exo.component.html',
  styleUrls: ['./api-exo.component.css']
})
export class ApiExoComponent implements OnInit {

  constructor(private service : UsersService) { }

  public users:any ;
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
  
  this.service.getAll()
  .subscribe((res:Response)=> {
    console.log(res)
    this.users=res;
  }, err => {console.log("Cannot get facebook Users   ")
             console.log(err);
})
  }
}
