import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonModule } from './lesson/lesson.module';
import { PupilsModule } from './pupils/pupils.module';
import { JournalModule } from './journal/journal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LessonModule,
    PupilsModule,
    JournalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
