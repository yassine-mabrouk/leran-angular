import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
    
  public courses=["react","anagular","VueJs"];
  detailInfo:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  detail($event){
  this.detailInfo=!this.detailInfo;
  console.log(this.detailInfo)
  $event.stopPropagation();
  }
  // ngSwitch 
  viewFram="angular";
  // ngFor 
  frams;
  deleteFram(course){
     
     let index=this.frams.indexOf(course);
     this.frams.splice(index,1);
     console.log("delete runing "+index);
  }
  // tarckBy : pour ne pas recuperer data doublement
  loadCourses() {
  this.frams=[
    {id:1,title:"Angular"},
    {id:2,title:"React"},
    {id:3,title:"Spring boot"},
    {id:4,title:"laravel"},
    {id:5,title:"nodeJs"},
  ]
  }
    // tarckBy : pour ne pas recuperer data doublement
    // faire le track By Id 

    trackFrams (index , course ){
      return course? course.id: undefined;
    }

}
