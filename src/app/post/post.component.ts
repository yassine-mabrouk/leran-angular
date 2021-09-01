import { HttpClient } from '@angular/common/http';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormGroup, MaxLengthValidator, FormControl } from '@angular/forms';
import {Post} from './post';
import { PostService } from './../servises/post.service';
import { User } from './../singn-up/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
   
     public detail:boolean=false;
     public posts:any=[];
     // this variable for data buinding 
     public  post=new Post();
     public incrmentId:number=100;
     public status:boolean=true;
     public UNEXPECTED_ERROR:boolean =true;
     public EXPECTED_ERROR:boolean =true;

  constructor(private postService: PostService) { 

  }

  ngOnInit(): void {
    this.getPosts();
  }
   public getPosts(){
     this.postService.getAll().subscribe((res:Response)=> {
       console.log(res);
       this.posts=res;
     }, err => {
       console.log("Cannot get posts :"+ err );
        this.UNEXPECTED_ERROR=false;
      
      }
     )
   }

   onshowBodyPosts(p){
     p.detail=!p.detail;
 
   }
 
   onCreatePost() {
    this.incrmentId++;
    this.postService.create(this.post)
    .subscribe((res:Post) => {
      console.log("Create post:")
      console.log(res);
       
     this.post.id=res.id;
     this.post.userId=1;
     this.posts.unshift(this.post);
    this.post=new Post();
    }, err => {
      console.log("Cannot create post :"+ err);
      this.UNEXPECTED_ERROR=false;
    })
    
   }
   onPrepareEditPost(p){
     this.post=p;
     this.status=false ;
   }

   onUpdatePost(){
     this.postService.update(this.post).subscribe(res => {
       console.log("updated avec success: "+this.post.id + " resposne ="+ res)
       this.status=true;
       this.post=new Post();
     },err => console.log("Cannot update post with id "+ this.post.id))
   }

   onDeletePost(p:any) {
     this.postService.delete(p).subscribe(res => {
       console.log("delete post num :"+ p.id);
     //  delete dans tableau 
       let index =this.posts.indexOf(p);
       console.log(this.EXPECTED_ERROR)
       this.posts.splice(index,1);
     }, (err:Response)=> {
      
      console.log("Cannot delete post :"+ err );
      if (err.status==404){
        this.EXPECTED_ERROR=false;
        console.log(this.EXPECTED_ERROR)
      }    
      else 
      this.UNEXPECTED_ERROR=false;

     })
   }
}
