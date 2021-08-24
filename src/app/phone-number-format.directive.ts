import { ElementRef, EventEmitter, HostListener } from '@angular/core';
import { Directive } from '@angular/core';


@Directive({
  selector: '[appPhoneNumberFormat]'
})
export class PhoneNumberFormatDirective {

  constructor( private element:ElementRef) { }

  @HostListener('blur') onBlur (){
    let value =this.element.nativeElement.value;
    this.element.nativeElement.value="(212) "+ value;
  }
}
