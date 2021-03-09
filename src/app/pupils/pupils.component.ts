import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pupils',
  templateUrl: './pupils.component.html',
  styleUrls: ['./pupils.component.css']
})
export class PupilsComponent implements OnInit {
  
  pupForm: FormGroup;

  constructor(private form: FormBuilder) {

    this.pupForm = form.group({
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
    (this.pupForm.get('lessons') as FormArray).insert(i+1,this.form.group({
      date: this.form.control(''),
      theme: this.form.control(''),
      hw: this.form.control(''),
      notice: this.form.control(''),
    }) )
  }
  delLesson(){
    (this.pupForm.get('lessons') as FormArray).removeAt(length+1);
  }

  change(){

  }

  sendForm(){
    console.log(this.pupForm)
  }

  ngOnInit(): void {
  }

}
