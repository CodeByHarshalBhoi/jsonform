import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { FormField, FormFieldJSON } from './form-field';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  formFields:FormFieldJSON[]=[];
  dynamicForm = this.fb.group({})

  title = 'jsonform';


  constructor(private appService:AppService, private fb:FormBuilder){}
  ngOnInit(): void {
    this.getDynamicFormService();
  }

  getDynamicFormService(){
    this.appService.getFormFields().subscribe((response:FormField)=>{
      console.log(response.data);
    this.formFields = response.data;
    this.setdynamicForm(response.data);
    });
  }

  setdynamicForm(controls:FormFieldJSON[]){
      for(let control of controls){
        let validators = [];
        if(control.validators?.required){
          validators.push(Validators.required);
        }
        this.dynamicForm.addControl(control.name, this.fb.control(control.value, validators))
      }
  }

  saveForm(){
    console.log(this.dynamicForm.value);
  }
}
