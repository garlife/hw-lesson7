import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-pupils',
  templateUrl: './pupils.component.html',
  styles: [
    `.bgCol{background-color: grey;}`
]
})
export class PupilsComponent implements OnInit {
  
  chReadOnly=true;
  isBgColorGrey=false;
  pupForm: FormGroup;

  constructor(public form: FormBuilder) {

    this.pupForm = form.group({
      pupils: form.array([
        form.group({
          surname: form.control('Сидоров', Validators.required),
          name: form.control('Петр', Validators.required),
          patronymic: form.control('Иванович')
        }),
      ]),
    }); 
  }

  addPupil(i){
    (this.pupForm.get('pupils') as FormArray).push(this.form.group({
      surname: this.form.control('', Validators.required),
      name: this.form.control('', Validators.required),
      patronymic: this.form.control('', Validators.required)
    }) )
  }
  delPupil(){
    (this.pupForm.get('pupils') as FormArray).removeAt(length+1);
  }
  
  toggle(){
    this.chReadOnly=!this.chReadOnly;
    this.isBgColorGrey=!this.isBgColorGrey;
  }

  sendForm(){
    console.log(this.pupForm)
  }

  ngOnInit(): void {
  }

}
