import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  chReadOnly=true;

  jourForm: FormGroup;

  constructor(private form: FormBuilder) {

    this.jourForm = form.group({
      marks: form.array([
        form.group({
          date: form.control('2021-01-01'),
          theme: form.control('Тема урока 1'),
          hw: form.control('Домашнее задание 1'),
          notice: form.control('Без комментариев'),
        }),
      ]),
    }); 
  }

  addLesson(){
    (this.jourForm.get('lessons') as FormArray).push(this.form.group({
      date: this.form.control(''),
      theme: this.form.control(''),
      hw: this.form.control(''),
      notice: this.form.control(''),
    }) )
  }
  delLesson(){
    (this.jourForm.get('lessons') as FormArray).removeAt(length+1);
  }

  toggle(){
    this.chReadOnly=!this.chReadOnly;
  }

  sendForm(){
    console.log(this.jourForm)
  }


  ngOnInit(): void {
  }

}
