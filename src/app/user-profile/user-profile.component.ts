import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../servises/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user:any;
  public Users :any;
  public userId :number;
  constructor(private route :ActivatedRoute,private userService :UsersService) { }

  ngOnInit(): void {
    this.getDynamiqueSegments ();
      
           this.getUser();
    // recuperation des queries 
    this.getQueries ();
  }
  
  getDynamiqueSegments (){
        // recuperer les segment dynamique 
    /*
    this.route.paramMap.subscribe(params=> {
      console.log(params);
      console.log(params.get('id'));
      this.userId=+params.get('id')
    })
    */
  //  ============utilser snaphoy pour recuperer les val des segment dynamique ==========
  this.userId=+this.route.snapshot.params["id"];// (1)
 // this.userId=+this.route.snapshot.params.id;   // la meme ecriture de (1)
  // + pour faire un casting ( int <===string)
  console.log("val de segment id "+this.route.snapshot.params["id"])
  }
  getQueries (){
      // recuperation des queries 
      this.route.queryParamMap.subscribe (queryparams => {
        console.log("Val query page :"+queryparams.get("page"));
        console.log("Val query size :"+queryparams.get("size"));
      })
  }
   getUser(){
        this.userService.getOne(this.userId).subscribe((data:any) => {
           this.user=data ;
        })
   }  
}
