import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo',
  templateUrl: './exo.component.html',
  styleUrls: ['./exo.component.css']
})
export class ExoComponent implements OnInit {
  public isFavorite:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onSetFavorite($event){
   // $event.stopPropagation();
    this.isFavorite=!this.isFavorite;
  }

}
