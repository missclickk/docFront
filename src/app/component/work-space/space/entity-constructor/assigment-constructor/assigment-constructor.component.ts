import { Component, Input, OnInit } from '@angular/core';
import { ActionType } from 'src/app/model/enum/ActionType';
import { TableType } from 'src/app/model/enum/TableType';
import { EntityService } from 'src/app/service/entityService/EntityService';
import { ServiceFactoryService } from 'src/app/service/entityService/service-factory.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-assigment-constructor',
  templateUrl: './assigment-constructor.component.html',
  styleUrls: ['./assigment-constructor.component.css']
})
export class AssigmentConstructorComponent implements OnInit {
  @Input() data : any;
  private ids : any[] = [];
  public formType : TableType = TableType.ASSIGMENT;
  private actionService : EntityService; 
    constructor(public state:StateService, private serviceFactory : ServiceFactoryService) {
      this.actionService = serviceFactory.getService(state.getCurrentBookmark()?.table || TableType.NONE);
    
   }

  ngOnInit(): void {
    if(this.state.getActionType() == ActionType.UPDATE)
      {
        this.ids[0] = this.data.id; 
        this.ids[1] = this.data.author.id; 
        this.ids[2] = this.data.executors.map((el : any) => el.id); 
        this.state.setStateOfCurrentBookmark(this.data.subject,TableType.ASSIGMENT,0);
        this.state.setStateOfCurrentBookmark(this.data.periodOfExecution,TableType.ASSIGMENT,1);
        this.state.setStateOfCurrentBookmark(this.data.text,TableType.ASSIGMENT,2);
      }
  }
  public formInput(event:any, formType: string) : void {    
    const type : TableType = TableType[formType as keyof typeof TableType]; 
    this.state.setStateOfCurrentBookmark(event[0], type, event[1] )
  }

  public handelForm( mode = "NONE") : void {
    if(this.state.getActionType() == ActionType.SAVE)
      this.save();
    if(this.state.getActionType() == ActionType.UPDATE)
      this.update(mode);   

  }
  
  private update ( action : string = "NONE") : void {
      let data : any[] =  this.state.getCurrentBookmark()?.state.get(TableType.ASSIGMENT) || [];    
      this.actionService.update(  { id : this.ids[0], subject : data[0], periodOfExecution : data[1], text : data[2], authorId : this.ids[1],
        executorsId : this.ids[2], signOfExecution: false, signOfControl: false , action   })
      .subscribe(
      (result : any) => {
        console.error(result);
      }
    ); 

  }

  private save() : void {
    let data : string[] =  this.state.getCurrentBookmark()?.state.get(TableType.ASSIGMENT) || [];     
    this.actionService.save( { subject : data[0], periodOfExecution : data[1], text : data[2], authorId : data[3],
      executorsId : data[4], signOfExecution: false, signOfControl: false , action : "NONE"   })
    .subscribe(
      (result : any) => {
        console.log(result);
      });          
  }

}
