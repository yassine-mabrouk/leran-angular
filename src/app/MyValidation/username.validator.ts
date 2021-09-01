import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator {

    static noSpace(control :AbstractControl ) : ValidationErrors | null {
         // control est de type any : en fait inversion to string by using as 
       if ((control.value as string).indexOf(' ') >= 0){
           return {
               noSpace :true 
           }
       }   
        return null ;
    }
}
