import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){}

   public post ={
    title:"my title from app component ",
    favorite:false
  }
  // recevoir un obj arg
  onChnageFavorite (arg){
    console.log("Favorite is changed ");
    console.log("Status:"+arg.type);
    console.log("Status:"+arg.title);
  }
  // for last video :test ng-content 
   public panel ={
     title: "myTitle"
   }
   


  
}
