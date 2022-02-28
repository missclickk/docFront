import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/interface/entity/Employee';
import { Subdivision } from 'src/app/model/interface/entity/Subdivision';
import { EmplHttpService } from '../http/empl-http.service';
import { SubdivisionHttpService } from '../http/subdivision-http.service';
import { BaseValidatorService } from '../utils/validator/base-validator.service';
import { BaseEntityService } from './base-entity.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseEntityService<EmplHttpService,Employee> {

  constructor(private orgHttp : EmplHttpService, private  validator : BaseValidatorService) {
    super(orgHttp);
   }

   public override save(employee : any) : Observable<Employee> {
     console.log(employee); 
    if(this.validator.stringIsEmpty(employee.firstName,employee.lastName,employee.patronymic))
      return super.save(employee);
    else 
        throw new Error("Пустые поля");
       
  }

  public override update(employee : Employee) : Observable<Employee> {
    if(this.validator.stringIsEmpty(employee.firstName,employee.lastName,employee.patronymic))
      return super.update(employee);
    else 
        throw new Error("Пустые поля");
  }

  public override getAll(): Observable<any> {
      return super.getAll();
  }
}
