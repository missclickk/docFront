import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';
import { OrgHttpService } from '../http/org-http.service';
import { BaseValidatorService } from '../utils/validator/base-validator.service';
import { BaseEntityService } from './base-entity.service';
import { EntityService } from './EntityService';
import { OrganizationService } from './organization.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceFactoryService {
  constructor(private http: HttpClient) { }

  public  getService(type : TableType) : EntityService  {
      switch(type){
        case TableType.ORGANIZATION :
          return new OrganizationService( new OrgHttpService(this.http) , new BaseValidatorService());
        default:
          throw new Error("service not exsist");
      }  
    
    

  }
  
}
