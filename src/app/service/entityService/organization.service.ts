import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from '../../model/interface/entity/Organization';
import { BaseEntityService } from './base-entity.service';
import { OrgHttpService } from '../http/org-http.service';
import { BaseValidatorService } from '../utils/validator/base-validator.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends BaseEntityService<OrgHttpService,Organization> {

  constructor(private orgHttp : OrgHttpService, private  validator : BaseValidatorService) {
    super(orgHttp);
   }

   public override save(org : Organization) : Observable<Organization> {
    if(this.validator.stringIsEmpty(org.physicalAdress, org.supervisor.firstName , org.supervisor.lastName , org.legalAddress ,org.supervisor.patronymic))
      return super.save(org);
    else 
        throw new Error("Пустые поля");
       
  }
 


}
