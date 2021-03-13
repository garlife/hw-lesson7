import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styles: [
    `
      .bgCol {
        background-color: grey;
      }
    `,
  ],
})
export class LessonComponent implements OnInit {
  chReadOnly = true;
  isBgColorGrey = false;
  // getDateCheck = new Date();
  //  getDate = new Date().getDate;
  //  getMonth = new Date().getMonth;
  //  getYear = new Date().getFullYear;
  //  strDate = this.getDate.toString();
  //  strMonth = this.getMonth.toString();
  //  strYear = this.getYear.toString();
  //  finDate = this.strYear + this.strMonth + this.strDate;

  //  strFinDate = this.finDate.toString;

  lesForm: FormGroup;

  constructor(private form: FormBuilder) {
    this.lesForm = form.group({
      lessons: form.array([
        form.group({
          date: form.control('2021-03-10', [
            Validators.required,
            this.dateValidator,
          ]),
          theme: form.control('Тема урока 1', Validators.required),
          hw: form.control('Домашнее задание 1', Validators.required),
          notice: form.control('Без комментариев'),
        }),
      ]),
    });
  }

  dateValidator(control: FormControl): any {
    let dateToUnix = Date.parse(control.value);

    if (dateToUnix > Date.now()) {
      return { date: true };
    }

    return null;
  }

  dateValidatorNew(control: FormControl): any {
    let dateMoment = control.value;

    if (moment().isAfter(dateMoment, 'day')) {
      return { date: true };
    }

    return null;
  }

  addLesson(i) {
    (this.lesForm.get('lessons') as FormArray).insert(
      i + 1,
      this.form.group({
        date: this.form.control('', [Validators.required, this.dateValidatorNew]),
        theme: this.form.control('', Validators.required),
        hw: this.form.control('', Validators.required),
        notice: this.form.control(''),
      })
    );
  }
  delLesson() {
    (this.lesForm.get('lessons') as FormArray).removeAt(length + 1);
  }

  toggle() {
    this.chReadOnly = !this.chReadOnly;
    this.isBgColorGrey = !this.isBgColorGrey;
  }

  sendForm() {
    console.log(this.lesForm);
  }

  ngOnInit(): void {}
}
