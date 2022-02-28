import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';
import { DataStorageService } from 'src/app/service/data-storage.service';
import { EntityService } from 'src/app/service/entityService/EntityService';
import { ServiceFactoryService } from 'src/app/service/entityService/service-factory.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-subdivision-form',
  templateUrl: './subdivision-form.component.html',
  styleUrls: ['./subdivision-form.component.css']
})
export class SubdivisionFormComponent implements OnInit {
  @Output() onInputForm = new EventEmitter();
  public orgs : any[];
  public formType  : TableType = TableType.SUBDIVIZON;
  private service : EntityService;
  constructor(public state: StateService, private factory : ServiceFactoryService, public dataStorage :DataStorageService ) {
        
     }

  ngOnInit(): void {
    this.getOrgs();
  }

  public getOrgs() : void {
    this.service = this.factory.getService( TableType.ORGANIZATION);
    this.service.getAll().subscribe(
      (result : any) => {
          this.orgs = result.map( (el : any) =>{
              return {id: el.id, name : el.name};
          })
          this.onInputForm.emit([this.orgs[0].id,2]);        
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
