import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pupils',
  templateUrl: './pupils.component.html',
  styleUrls: ['./pupils.component.css']
})
export class PupilsComponent implements OnInit {
  
  chReadOnly=true;
  pupForm: FormGroup;

  constructor(private form: FormBuilder) {

    this.pupForm = form.group({
      pupils: form.array([
        form.group({
          surname: form.control('Сидоров'),
          name: form.control('Петр'),
          patronymic: form.control('Иванович')
        }),
      ]),
    }); 
  }

  addPupil(i){
    (this.pupForm.get('pupils') as FormArray).insert(i+1,this.form.group({
      surname: this.form.control(''),
      name: this.form.control(''),
      patronymic: this.form.control('')
    }) )
  }
  delPupil(){
    (this.pupForm.get('pupils') as FormArray).removeAt(length+1);
  }
  
  toggle(){
    this.chReadOnly=!this.chReadOnly;
  }

  sendForm(){
    console.log(this.pupForm)
  }

  ngOnInit(): void {
  }

}
