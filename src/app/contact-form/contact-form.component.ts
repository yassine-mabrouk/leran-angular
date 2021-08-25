import { Component, ElementRef, OnInit } from '@angular/core';
import {Contact} from './contact'

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public contact =[]
  public contactWay = [ 
    {id:1,name:"phone"},
    {id:2,name:"sms"},
    {id:1,name:"email"},
  ]
  public sexeType=["Men", "female","Other"]
  constructor(private el : ElementRef) { }

  ngOnInit(): void {
  }
   public name:string ="Yassine Mabrouk "

  onkeyUp($event)  {
  
   // this.name=this.el.nativeElement.value ;
    console.log ("val input :"+ $event.target.value);

  }
  log(x){
    //console.log(x);
  }
  submit(f){
   // console.log("First name :"+f.value);
   let contact= new Contact();
   console.log(f.value)
   // noubliez pas que les données groupes dans un ngModelGroup =contact 
     contact.firstname=f.value.contact.firstname;
     contact.lastname=f.value.contact.lastname;
     contact.comment=f.value.contact.comment;
     contact.contactWayName=f.value.contact.contactway?.name;
     contact.abonner=f.value.contact.abonner;
     contact.sexe=f.value.contact.sexe;
     this.contact.push(contact);
  }
  onDeleteContact(c){
    let idex =this.contact.indexOf(c);
    // supprimer un comtact 
    this.contact.splice(idex,1);
  }
}


/*
==> validation
fistName : est un variable template = pointeur sur tag  
firstName.touched : input est pointer par curror 
firstName.valid : iput est valide 


*/
