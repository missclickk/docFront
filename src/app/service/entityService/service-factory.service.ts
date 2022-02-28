import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';
import { AssigmentHttpService } from '../http/assigment-http.service';
import { EmplHttpService } from '../http/empl-http.service';
import { OrgHttpService } from '../http/org-http.service';
import { SubdivisionHttpService } from '../http/subdivision-http.service';
import { BaseValidatorService } from '../utils/validator/base-validator.service';
import { AssigmentService } from './assigment.service';
import { BaseEntityService } from './base-entity.service';
import { EmployeeService } from './employee.service';
import { EntityService } from './EntityService';
import { OrganizationService } from './organization.service';
import { SubdivisionService } from './subdivision.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceFactoryService {
  constructor(private http: HttpClient) { }

  public  getService(type : TableType) : EntityService  {  
    switch(type){
        case TableType.ORGANIZATION :
          return new OrganizationService( new OrgHttpService(this.http) , new BaseValidatorService());
        case TableType.SUBDIVIZON :
          return new SubdivisionService( new SubdivisionHttpService(this.http) , new BaseValidatorService());
        case TableType.EMPLOYEE :
          return new EmployeeService( new EmplHttpService(this.http) , new BaseValidatorService());
        case TableType.ASSIGMENT :
          return new AssigmentService( new AssigmentHttpService(this.http) , new BaseValidatorService());
  
          default:
          throw new Error("service not exsist");
      }  
    
    

  }
  
}
