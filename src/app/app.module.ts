import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingnUpComponent } from './singn-up/singn-up.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SingnUpComponent,
    PostComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
