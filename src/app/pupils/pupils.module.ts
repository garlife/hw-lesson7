import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PupilsComponent } from './pupils.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PupilsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [PupilsComponent]
})
export class PupilsModule { }
