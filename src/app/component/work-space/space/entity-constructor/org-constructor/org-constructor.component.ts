import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';
import { Employee } from 'src/app/model/interface/entity/Employee';

import { OrgHttpService } from 'src/app/service/http/org-http.service';
import { OrganizationService } from 'src/app/service/entityService/organization.service';
import { StateService } from 'src/app/service/state.service';
import { BaseValidatorService } from 'src/app/service/utils/validator/base-validator.service';
import { ServiceFactoryService } from 'src/app/service/entityService/service-factory.service';
import { EntityService } from 'src/app/service/entityService/EntityService';

@Component({
  selector: 'app-org-constructor',
  templateUrl: './org-constructor.component.html',
  styleUrls: ['./org-constructor.component.css']
})
export class OrgConstructorComponent implements OnInit {
  public isOrgForm = true;
  private actionService : EntityService; 
    constructor(public state:StateService, private serviceFactory : ServiceFactoryService  ) {
      this.actionService = serviceFactory.getService(state.getCurrentBookmark()?.table || TableType.NONE);
    
   }

  ngOnInit(): void {
  }

  public setFrom(form:boolean) : void {
    this.isOrgForm = form;
  }

  public formInput(event:any, formType: string) : void {
    const type : TableType = TableType[formType as keyof typeof TableType]; 
    this.state.setStateOfCurrentBookmark(event[0], type, event[1] )
  }


  public save() : void {
      let orgData : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.ORGANIZATION) || [];
      let emlData : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.EMPLOYEE) || [];
      let employee : Employee = {firstName : emlData[0] || "", lastName : emlData[1] || "", patronymic : emlData[2] || "" };     
      this.actionService.save( {name: orgData[0] || "", physicalAdress : orgData[1] || "" , legalAddress : orgData[2] || "", 
      supervisor: employee  })
      .subscribe(
        (result : any) => {
          console.error(result);
        }
      );          
  }

}
