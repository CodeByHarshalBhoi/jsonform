import { Component, OnInit } from '@angular/core';
import { JsonFormService } from './json-form.service';
import { JsonFormJSON } from './json-form';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-jsonform',
  templateUrl: './jsonform.component.html',
  styleUrls: ['./jsonform.component.css']
})
export class JsonformComponent implements OnInit{


jsonFormField:JsonFormJSON[]=[];
dynamicForm=this.fb.group({});



  constructor(private jsonFormService:JsonFormService, private fb:FormBuilder){

  }
      ngOnInit(): void {
        this.getDynamicformService();
      }
      getDynamicformService(){
            this.jsonFormService.getJsonDataField().subscribe((response)=>{
              this.jsonFormField = response.data;
              console.log(response.data);
            })
        }

        setDynamicForm(controls:JsonFormJSON[]){
          for(let control of controls){
            let validators=[];
            if(control.validators?.required){
              validators.push(Validators.required)
            }
            this.dynamicForm.addControl(control.name, this.fb.control(control.value, validators))
          }
        }

        saveForm(){
          console.log(this.dynamicForm.value);

        }
}
