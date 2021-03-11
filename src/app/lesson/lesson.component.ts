import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styles: [
    `.bgCol{background-color: grey;}`
]
})
export class LessonComponent implements OnInit {

  // headers  = ['1','2','3'];
  chReadOnly=true;
  isBgColorGrey=false;

  lesForm: FormGroup;

  constructor(private form: FormBuilder) {

    this.lesForm = form.group({
      lessons: form.array([
        form.group({
          date: form.control('2021-01-01'),
          theme: form.control('Тема урока 1'),
          hw: form.control('Домашнее задание 1'),
          notice: form.control('Без комментариев'),
        }),
      ]),
    }); 
  }

  addLesson(i){
    (this.lesForm.get('lessons') as FormArray).insert(i+1,this.form.group({
      date: this.form.control(''),
      theme: this.form.control(''),
      hw: this.form.control(''),
      notice: this.form.control(''),
    }) )
  }
  delLesson(){
    (this.lesForm.get('lessons') as FormArray).removeAt(length+1);
  }

  toggle(){
    this.chReadOnly=!this.chReadOnly;
    this.isBgColorGrey=!this.isBgColorGrey;
  }

  sendForm(){
    console.log(this.lesForm)
  }

  ngOnInit(): void {
  }

}
