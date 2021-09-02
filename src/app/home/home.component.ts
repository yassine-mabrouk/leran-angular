import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route :Router) { }

  ngOnInit(): void {
  }
  goTocreatePoste(){
  this.route.navigate(['postes']);
  }
  goToUsers(){
    this.route.navigate(['users']); //to go to all users 
    // this.route.navigate(['users',1], {  // to go to user specifique 
    //   queryParams:{
    //     page:1,size:1
    //   }
    // });

  }
  goToLogin(){
    this.route.navigateByUrl("/login");
  }
}
