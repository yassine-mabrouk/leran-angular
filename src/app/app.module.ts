import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingnUpComponent } from './singn-up/singn-up.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { UserComponent } from './users/user.component';
import { PostService } from './servises/post.service';
import { DataServise } from './servises/data.service';
import { UsersService } from './servises/users.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';



const routes:Routes = [
  {path : 'postes' ,component:PostComponent},
  {path : 'users' ,component:UserComponent},
  {path : 'home' ,component:HomeComponent},
  {path : 'users/:id' ,component:UserProfileComponent},
  {path : 'login' ,component:SingnUpComponent},
  {path : 'about' ,component:AboutComponent},
  {path : '**' ,component:PageNotFoundComponent},
 
]
@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SingnUpComponent,
    PostComponent,
    UserComponent,
    HomeComponent,
    UserProfileComponent,
    PageNotFoundComponent,
    AboutComponent,
    NavbarComponent
   
  ],
  imports: [

  BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataServise,PostService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
