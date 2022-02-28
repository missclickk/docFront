import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';
import { DataStorageService } from 'src/app/service/data-storage.service';
import { EntityService } from 'src/app/service/entityService/EntityService';
import { ServiceFactoryService } from 'src/app/service/entityService/service-factory.service';
import { PositionHttpService } from 'src/app/service/http/position-http.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Input() data : any;
  @Output() onInputForm = new EventEmitter();
  public formType  : TableType = TableType.EMPLOYEE;
  public positions : any[];
  public subdivisions : any[];
  private service : EntityService;
  constructor(public state: StateService,public dataStorage :DataStorageService, private positionService: PositionHttpService,
    private factory : ServiceFactoryService) {
   }

  ngOnInit(): void {
    if (  this.state.getCurrentBookmark()?.table == TableType.EMPLOYEE)
      {
        this.getPositions();
        this.getSubdivisions();
      }
  }

  public getPositions() : void {
    this.positionService.getAll().subscribe(
      (result : any) => {
          this.positions = result.map( (el : any) =>{
              return {id: el.id, name : el.name};
          })
          this.onInputForm.emit([this.positions[0].id,3]);        
      },
      (error: any) =>{
        console.log(error);
      }
    ); 
  }

  public getSubdivisions() : void {
    this.service = this.factory.getService( TableType.SUBDIVIZON);
    this.service.getAll().subscribe(
      (result : any) => {
          this.subdivisions = result.map( (el : any) =>{
              return {id: el.id, name : el.name};
          })
          this.onInputForm.emit([this.subdivisions[0].id,4]);        
      },
      (error: any) =>{
        console.log(error);
      }
    ); 
  }

  public inputForm(event: any, inputNumber : number) : void {
    const data :string = event.target.value;
    this.onInputForm.emit([data , inputNumber]);
  }

  

}
