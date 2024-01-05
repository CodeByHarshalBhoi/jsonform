import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonForm } from './json-form';

@Injectable({
  providedIn: 'root'
})
export class JsonFormService {

  constructor(private http:HttpClient) { }

  getJsonDataField():Observable<JsonForm>{
      return this.http.get<JsonForm>('assets/jsonForm.json');
  }
}
