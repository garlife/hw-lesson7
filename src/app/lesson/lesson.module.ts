import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LessonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [LessonComponent]
})
export class LessonModule { }
