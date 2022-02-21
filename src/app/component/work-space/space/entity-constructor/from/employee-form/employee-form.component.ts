import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Output() onInputForm = new EventEmitter();
  public formType  : TableType = TableType.EMPLOYEE;
  constructor(public state: StateService) {
   }

  ngOnInit(): void {
  }

  public inputForm(event: any, inputNumber : number) : void {
    const data :string = event.target.value;
    this.onInputForm.emit([data , inputNumber]);
  }

}
