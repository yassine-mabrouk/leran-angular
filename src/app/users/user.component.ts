import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../servises/post.service';
import { UsersService } from '../servises/users.service';

@Component({
  selector: 'app-api-exo',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service : UsersService,private http:HttpClient) { }

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
//   getUser (id:number){
//     this.http.getOne(id).subscribe(res=> {
//       console.log(res);
//     }, err => console.log("cannot get User with id :"+id))
// }

   getUser (id:number){
     this.service.getOne(id).subscribe(res=> {
      console.log(res);
     } , err=> console.log("cannot get User with id :"+id));
   }
}
