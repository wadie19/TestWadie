import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './allFilms/film/film.component';
import { LesfilmsComponent } from './allFilms/lesfilms/lesfilms.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    LesfilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
