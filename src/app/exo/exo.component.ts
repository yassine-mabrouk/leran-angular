import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo',
  templateUrl: './exo.component.html',
  styleUrls: ['./exo.component.css']
})
export class ExoComponent implements OnInit {
   
   public post ={
     title:"my title",
     favorite:true
   }
   title:string="favorite-com"
  @Input('is-favorite') isFavorite:boolean=false;
  // is-favourite est un alias qui pointe sur le variable isFavoite 
  @Output ('change') myFunction=new EventEmitter();
  // change est un alias t sur output 
  constructor() { }

  ngOnInit(): void {
  }
  onSetFavorite($event){
   $event.stopPropagation();
  this.isFavorite=!this.isFavorite;
  // passer un objet 
  const arg ={type:this.isFavorite,title:this.title};
  this.myFunction.emit(arg);
  }

}
