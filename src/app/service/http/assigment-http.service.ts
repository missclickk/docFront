import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Assigment } from 'src/app/model/interface/entity/Assigment';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class AssigmentHttpService extends BaseHttpService<Assigment> {
  protected override readonly uri : string  = "assigment";
  constructor( @Inject('HttpClient') private http:HttpClient) {
    super(http);
  }
}
