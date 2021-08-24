import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el:ElementRef) { }
   // Creation d'un atribut bindint 
   // faire alisad de property binding et le meme dirictives 
   @Input('appInputFormat') format :string;

  //   @HostListener('blur') : pour que la methode execute si j'ai fait des operation sur input 
  @HostListener('blur') OnBlur (){
    let value:string=this.el.nativeElement.value;
    if (this.format=='lowerCase')
    this.el.nativeElement.value=value.toLowerCase();
    else {
      this.el.nativeElement.value=value.toUpperCase();
    }
    console.log("onblur ");
  }

  // @HostListener('focus') OnFocus  (){
  //   console.log("Onfoucus  ");
  // }
}
