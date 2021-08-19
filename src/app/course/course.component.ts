import { Component, OnInit } from '@angular/core';
import { CouresService } from './../services/coures.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit {

  public name :string="Yassine Mabrouk";
  public courses;
  public source ="https://e-solution.ma/manager/photos/shares/Photos-articles/the-seo-guide-to-angular-760x400.png";
  public isdisabled=false;
  public changeColor=false;
  public warning:string;
  public Allcours="";
  public nameFormation ="angular 5";
  constructor(couresService:CouresService) { 
    this.courses=couresService.getCourses();
  }
  ngOnInit() {

  }
    
  getEmail(){
    return this.name;
  }
  onchangeColor($event){
    // $event contient tout les info sur le dom declonche 
   $event.stopPropagation(); // pour executer selement l'event de ce botton 
    this.changeColor=!this.changeColor;
    console.log($event);
  }
  ondivClick(){
    alert("Another event is runnnig !!!!!")
  }

  // Filtring event and Template variable 
  /*
  public getInputValue:string;
  onKeyUp (email){
     console.log("onkeyUp runnig !!!!!!!!");
     // le promer csa 
     //this.getInputValue=$event.target.value;
     this.getInputValue=email.value;
     console.log(this.getInputValue);
     console.log(email);
  }
  */
 
  /*
  // TWO-AWAY databinding 
  public getInputValue:string;
  onKeyUp (){
     console.log("onkeyUp runnig !!!!!!!!");
     // le promer csa 
     //this.getInputValue=$event.target.value;
     console.log(this.getInputValue);
  }
  */
 // les pipes 
 public contact ={
        title:"Formation Angular ",
        avis : 14.9793,
        prix: 549,
        dateCreation:new Date(2017,1,20)

 }


}
