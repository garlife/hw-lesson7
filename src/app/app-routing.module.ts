import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from './journal/journal.component';
import { LessonComponent } from './lesson/lesson.component';
import { PupilsComponent } from './pupils/pupils.component';

const routes: Routes = [
  {
    path: 'lesson',
    component: LessonComponent
  },
  {
    path: 'journal',
    component: JournalComponent
  },
  {
    path: 'pupils',
    component: PupilsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
