import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/navbar/navbar.component';
import { QuizComponent } from './features/quiz/quiz.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RadioButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    ProgressBarModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
