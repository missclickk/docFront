import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subdivision } from 'src/app/model/interface/entity/Subdivision';
import { SubdivisionHttpService } from '../http/subdivision-http.service';
import { BaseValidatorService } from '../utils/validator/base-validator.service';
import { BaseEntityService } from './base-entity.service';

@Injectable({
  providedIn: 'root'
})
export class SubdivisionService extends BaseEntityService<SubdivisionHttpService,Subdivision> {

  constructor(private orgHttp : SubdivisionHttpService, private  validator : BaseValidatorService) {
    super(orgHttp);
   }

   public override save(subdivision : Subdivision) : Observable<Subdivision> {
    if(this.validator.stringIsEmpty(subdivision.name, subdivision.supervisor.firstName , subdivision.supervisor.lastName 
      , subdivision.contactData ,subdivision.supervisor.patronymic))
      return super.save(subdivision);
    else 
        throw new Error("Пустые поля");
       
  }

  public override update(subdivision : Subdivision) : Observable<Subdivision> {
    if(this.validator.stringIsEmpty(subdivision.name, subdivision.supervisor.firstName , subdivision.supervisor.lastName 
      , subdivision.contactData ,subdivision.supervisor.patronymic))
      return super.update(subdivision);
    else 
        throw new Error("Пустые поля");
  }

  public override getAll(): Observable<any> {
      return super.getAll();
  }

}
