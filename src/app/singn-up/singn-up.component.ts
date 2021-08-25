import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { UsernameValidator } from './../MyValidation/username.validator';

@Component({
  selector: 'app-singn-up',
  templateUrl: './singn-up.component.html',
  styleUrls: ['./singn-up.component.css']
})
export class SingnUpComponent implements OnInit {
  public users=[
    {username:"yassine",password:"123"},
    {username:"yassine",password:"123"},
    {username:"yassine",password:"123"},
    {username:"yassine",password:"123"},
  ]

  constructor() { }

  ngOnInit(): void {
  }
  // creation de formulaire au niveau de component.ts 
  form=new FormGroup({
    // le premier arg est value de input  FormControl(valInputl , validation )
    username:new FormControl('',
    [
      Validators.required,
      Validators.pattern('[a-zA-Z]+'),
      // using my validation 
      UsernameValidator.noSpace
    
    ]),

    password:new FormControl('',[Validators.required, Validators.minLength(3)])
  })

   onSubmit(f){
     console.log(f);
     console.log(f.value)
     let user =new User();
     user.username=f.value.username;
     user.password=f.value.password ;
     this.users.push(user);
   }
 
   deleteUser(u){
     let index=this.users.indexOf(u);
    this.users.splice(index,1);
     console.log("delte user numero :"+index);
   }
   ShowEroors(form){
     console.log("Errors :"+form);
   }

   // en cree ses fonvtion pour minimiser les variable au niveau de html
   get username(){
     return this.form.get('username');
   }
   get password(){
    return this.form.get('password');
  }
}
