import { Component, Input, OnInit } from '@angular/core';
import { ActionType } from 'src/app/model/enum/ActionType';
import { TableType } from 'src/app/model/enum/TableType';
import { Employee } from 'src/app/model/interface/entity/Employee';
import { EntityService } from 'src/app/service/entityService/EntityService';
import { ServiceFactoryService } from 'src/app/service/entityService/service-factory.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-subdivision-constructor',
  templateUrl: './subdivision-constructor.component.html',
  styleUrls: ['./subdivision-constructor.component.css']
})
export class SubdivisionConstructorComponent implements OnInit {
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
        this.state.setStateOfCurrentBookmark(this.data.name,TableType.SUBDIVIZON,0);
        this.state.setStateOfCurrentBookmark(this.data.contactData,TableType.SUBDIVIZON,1);
        this.state.setStateOfCurrentBookmark(this.data.organization.id,TableType.SUBDIVIZON,2);
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
    let subData : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.SUBDIVIZON) || [];
      let emlData : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.EMPLOYEE) || [];
      let employee : Employee = {id: this.ids[1],firstName : emlData[0] || "", lastName : emlData[1] || "", patronymic : emlData[2] || "", position : {id:2} };     
      this.actionService.update( {id : this.ids[0], name: subData[0] || "", contactData : subData[1] || "" , organizationId : subData[2] || "", 
      supervisor: employee  })
      .subscribe(
      (result : any) => {
        console.error(result);
      }
    ); 

  }

  private save() : void {
      let subData : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.SUBDIVIZON) || [];
      let emlData : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.EMPLOYEE) || [];
      let employee : Employee = {firstName : emlData[0] || "", lastName : emlData[1] || "", patronymic : emlData[2] || "", position : {id:2} };     
      this.actionService.save( {name: subData[0] || "", contactData : subData[1] || "" , organizationId : subData[2] || "", 
      supervisor: employee  })
      .subscribe(
        (result : any) => {
          console.log(result);
        }
      );          
    }
}
