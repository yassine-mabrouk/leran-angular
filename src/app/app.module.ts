import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingnUpComponent } from './singn-up/singn-up.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ApiExoComponent } from './api-exo/api-exo.component';
import { PostService } from './servises/post.service';
import { DataServise } from './servises/data.service';
import { UsersService } from './servises/users.service';
@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SingnUpComponent,
    PostComponent,
    ApiExoComponent,
   
  ],
  imports: [



  BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataServise,PostService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
