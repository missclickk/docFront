import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Organization } from 'src/app/model/interface/entity/Organization';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class OrgHttpService extends BaseHttpService<Organization> {
  protected override readonly uri : string  = "organization";
  constructor( @Inject('HttpClient') private http:HttpClient) {
    super(http);
  }
}
