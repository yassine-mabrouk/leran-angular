import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
   
  @Input('title') mytile:string;
  @Output('change') setContent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.onSetContent();
  }

  onSetContent(){
    //event.stopPropagation();
    this.setContent.emit();
  }


}
