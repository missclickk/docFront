import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assigment } from 'src/app/model/interface/entity/Assigment';
import { Employee } from 'src/app/model/interface/entity/Employee';
import { Subdivision } from 'src/app/model/interface/entity/Subdivision';
import { AssigmentHttpService } from '../http/assigment-http.service';
import { EmplHttpService } from '../http/empl-http.service';
import { SubdivisionHttpService } from '../http/subdivision-http.service';
import { BaseValidatorService } from '../utils/validator/base-validator.service';
import { BaseEntityService } from './base-entity.service';

@Injectable({
  providedIn: 'root'
})
export class AssigmentService extends BaseEntityService<AssigmentHttpService,Assigment> {

  constructor(private orgHttp : AssigmentHttpService, private  validator : BaseValidatorService) {
    super(orgHttp);
   }

   public override save(assigment : Assigment) : Observable<Assigment> {

    if(this.validator.stringIsEmpty(assigment.periodOfExecution,assigment.subject) && assigment.executorsId.length>0)
      return super.save(assigment);
    else 
        throw new Error("Пустые поля");
       
  }

  public override update(assigment : Assigment) : Observable<Assigment> {
    if(this.validator.stringIsEmpty(assigment.periodOfExecution,assigment.subject) && assigment.executorsId.length>0)
      return super.update(assigment);
    else 
        throw new Error("Пустые поля");
  }

  public override getAll(): Observable<any> {
      return super.getAll();
  }

}
