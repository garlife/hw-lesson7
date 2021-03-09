import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PupilsComponent } from './pupils.component';



@NgModule({
  declarations: [PupilsComponent],
  imports: [
    CommonModule
  ],
  exports: [PupilsComponent]
})
export class PupilsModule { }
