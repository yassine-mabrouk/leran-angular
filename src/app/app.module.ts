import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { InputFormatDirective } from './input-format.directive';
import { PhoneNumberFormatDirective } from './phone-number-format.directive';

@NgModule({
  declarations: [	
    AppComponent,
      CoursesComponent,
      InputFormatDirective,
      PhoneNumberFormatDirective
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
