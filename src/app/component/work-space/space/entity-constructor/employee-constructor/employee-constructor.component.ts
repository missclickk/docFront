import { Component, Input, OnInit } from '@angular/core';
import { ActionType } from 'src/app/model/enum/ActionType';
import { TableType } from 'src/app/model/enum/TableType';
import { Employee } from 'src/app/model/interface/entity/Employee';
import { EntityService } from 'src/app/service/entityService/EntityService';
import { ServiceFactoryService } from 'src/app/service/entityService/service-factory.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-employee-constructor',
  templateUrl: './employee-constructor.component.html',
  styleUrls: ['./employee-constructor.component.css']
})
export class EmployeeConstructorComponent implements OnInit {
  @Input() data : any;
  private ids : number[] = [];
  private actionService : EntityService; 
  constructor(public state:StateService, private serviceFactory : ServiceFactoryService) {
    this.actionService = serviceFactory.getService(state.getCurrentBookmark()?.table || TableType.NONE);
   }

  ngOnInit(): void {
    if(this.state.getActionType() == ActionType.UPDATE)
      {
        this.ids[0] = this.data.id; 
        this.state.setStateOfCurrentBookmark(this.data.firstName ,TableType.EMPLOYEE,0);
        this.state.setStateOfCurrentBookmark(this.data.lastName,TableType.EMPLOYEE,1);
        this.state.setStateOfCurrentBookmark(this.data.patronymic,TableType.EMPLOYEE,2);
        this.state.setStateOfCurrentBookmark(this.data.position,TableType.EMPLOYEE,3);
        this.state.setStateOfCurrentBookmark(this.data.subdivision,TableType.EMPLOYEE,4);

      }
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
    let emlData : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.EMPLOYEE) || [];  
      this.actionService.update({id : this.ids[0], firstName : emlData[0] || "", lastName : emlData[1] || "", patronymic : emlData[2] || "", positionId :emlData[3],
      subdivisionId : emlData[4] }) 
      .subscribe(
      (result : any) => {
        console.error(result);
      }
    ); 

  }

  private save() : void {
      let emlData : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.EMPLOYEE) || [];  
      this.actionService.save({firstName : emlData[0] || "", lastName : emlData[1] || "", patronymic : emlData[2] || "", positionId :emlData[3],
      subdivisionId : emlData[4] }) 
      .subscribe(
        (result : any) => {
          console.log(result);
        }
      );          
    }
}
