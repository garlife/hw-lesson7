import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalComponent } from './journal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [JournalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [JournalComponent]
})
export class JournalModule { }
