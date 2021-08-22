import { CourseComponent } from './course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CouresService } from './services/coures.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ResumePipe } from './pipes/resume.pipe';
import { ExoComponent } from './exo/exo.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [	
    AppComponent,
      CourseComponent,
      ResumePipe,
      ExoComponent,
      PanelComponent
   ],
  imports: [

  BrowserModule,
  FormsModule   // pour la gestion des formulaire et TWO AWAY DATABINDING 

  ],
  providers: [CouresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
