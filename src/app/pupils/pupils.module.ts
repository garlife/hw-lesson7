import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PupilsComponent } from './pupils.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PupilsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [PupilsComponent]
})
export class PupilsModule { }
