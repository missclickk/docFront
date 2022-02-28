import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Assigment } from 'src/app/model/interface/entity/Assigment';
import { Subdivision } from 'src/app/model/interface/entity/Subdivision';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class SubdivisionHttpService extends BaseHttpService<Subdivision> {
  protected override readonly uri : string  = "subdivision";
  constructor( @Inject('HttpClient') private http:HttpClient) {
    super(http);
  }
}
