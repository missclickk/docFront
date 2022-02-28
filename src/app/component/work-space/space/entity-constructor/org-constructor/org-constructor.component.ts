import { Component,  Input,  OnInit } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';
import { Employee } from 'src/app/model/interface/entity/Employee';
import { StateService } from 'src/app/service/state.service';
import { ServiceFactoryService } from 'src/app/service/entityService/service-factory.service';
import { EntityService } from 'src/app/service/entityService/EntityService';
import { TableService } from 'src/app/service/table.service';
import { ActionType } from 'src/app/model/enum/ActionType';

@Component({
  selector: 'app-org-constructor',
  templateUrl: './org-constructor.component.html',
  styleUrls: ['./org-constructor.component.css']
})
export class OrgConstructorComponent implements OnInit {
  @Input() data : any;
  public isOrgForm = true;
  private ids : number[] = [];
  private actionService : EntityService; 
    constructor(public state:StateService, private serviceFactory : ServiceFactoryService) {
      this.actionService = serviceFactory.getService(state.getCurrentBookmark()?.table || TableType.NONE);
    
   }

  ngOnInit(): void {
    if(this.state.getActionType() == ActionType.UPDATE)
      {
        this.ids[0] = this.data.id; 
        this.ids[1] = this.data.supervisor.id; 
        this.state.setStateOfCurrentBookmark(this.data.name,TableType.ORGANIZATION,0);
        this.state.setStateOfCurrentBookmark(this.data.physicalAdress,TableType.ORGANIZATION,1);
        this.state.setStateOfCurrentBookmark(this.data.legalAddress,TableType.ORGANIZATION,2);
        this.state.setStateOfCurrentBookmark(this.data.supervisor.firstName ,TableType.EMPLOYEE,0);
        this.state.setStateOfCurrentBookmark(this.data.supervisor.lastName,TableType.EMPLOYEE,1);
        this.state.setStateOfCurrentBookmark(this.data.supervisor.patronymic,TableType.EMPLOYEE,2);

      }
  }

  public setFrom(form:boolean) : void {
    this.isOrgForm = form;
  }

  public formInput(event:any, formType: string) : void {
    const type : TableType = TableType[formType as keyof typeof TableType]; 
    this.state.setStateOfCurrentBookmark(event[0], type, event[1] )
  }

  public handelForm() : void {
    if(this.state.getActionType() == ActionType.SAVE)
      this.save();
    if(this.state.getActionType() == ActionType.UPDATE)
      this.update();   

  }
  
  private update () : void {
    let orgData : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.ORGANIZATION) || [];
    let emlData : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.EMPLOYEE) || [];
    let employee : Employee = {id: this.ids[1], firstName : emlData[0] || "", lastName : emlData[1] || "", patronymic : emlData[2] || "" };     
    this.actionService.update( {id: this.ids[0], name: orgData[0] || "", physicalAdress : orgData[1] || "" , legalAddress : orgData[2] || "", 
    supervisor: employee  })
    .subscribe(
      (result : any) => {
        console.error(result);
      }
    ); 

  }

  private save() : void {
      let orgData : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.ORGANIZATION) || [];
      let emlData : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.EMPLOYEE) || [];
      let employee : Employee = {firstName : emlData[0] || "", lastName : emlData[1] || "", patronymic : emlData[2] || "", position : {id:1} };     
      this.actionService.save( {name: orgData[0] || "", physicalAdress : orgData[1] || "" , legalAddress : orgData[2] || "", 
      supervisor: employee  })
      .subscribe(
        (result : any) => {
          console.log(result);
        }
      );          
  }

}
