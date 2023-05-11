import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit{


    //forma reactiva en un momento especifico
    ngOnInit(): void {
      this.nameField.valueChanges
      .subscribe(value =>{
        console.log(value);
      });
     //forma reactiva es decir tiempo real
    }
      //diferentes tipos de input en form
    nameField= new FormControl('');//es un constructor
    emailField=  new FormControl('');
    phoneField=  new FormControl('');
    colorField=  new FormControl('');
    dateField=  new FormControl('');
    ageField=  new FormControl('');
    getNameValue(){
      console.log(this.nameField.value); //captura el valor en ese instante
    }

}
