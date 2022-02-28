import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';
import { DataStorageService } from 'src/app/service/data-storage.service';
import { EntityService } from 'src/app/service/entityService/EntityService';
import { ServiceFactoryService } from 'src/app/service/entityService/service-factory.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-assigment-form',
  templateUrl: './assigment-form.component.html',
  styleUrls: ['./assigment-form.component.css']
})
export class AssigmentFormComponent implements OnInit {
  @Output() onInputForm = new EventEmitter();
  public empls : any[];
  selectedExecutors : string[] = [];
  public formType  : TableType = TableType.ASSIGMENT;
  private service : EntityService ;
  constructor( public state: StateService, private factory : ServiceFactoryService, public dataStorage :DataStorageService ) {
        
     }

  ngOnInit(): void {
    this.geteEmpls();
  }

  public geteEmpls() : void {
    this.service = this.factory.getService( TableType.EMPLOYEE);
    this.service.getAll().subscribe(
      (result : any) => {
          this.empls = result.map( (el : any) =>{
              return {id: el.id, name : `${el.lastName} ${el.firstName}  ${el.patronymic}`};
          })
          this.onInputForm.emit([this.empls[0].id,3]);        
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

  public halndelChange(event: any, inputNumber : number) : void {
    this.inputForm(event, inputNumber );
  
  }

  public handelMultiple( inputNumber : number) :void {
    this.onInputForm.emit([this.selectedExecutors , inputNumber]);
  } 
}
