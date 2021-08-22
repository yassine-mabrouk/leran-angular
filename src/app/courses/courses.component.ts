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
}
