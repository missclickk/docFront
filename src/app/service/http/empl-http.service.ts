import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Assigment } from 'src/app/model/interface/entity/Assigment';
import { Employee } from 'src/app/model/interface/entity/Employee';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class EmplHttpService extends BaseHttpService<Employee> {
  protected override readonly uri : string  = "employee";
  constructor( @Inject('HttpClient') private http:HttpClient) {
    super(http);
  }
}
