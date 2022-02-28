import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-org-form',
  templateUrl: './org-form.component.html',
  styleUrls: ['./org-form.component.css']
})
export class OrgFormComponent implements OnInit {
  @Input() data : any;
  @Output() onInputForm = new EventEmitter();
  public formType  : TableType = TableType.ORGANIZATION;
  constructor(public state: StateService) {
      
   }
  
  ngOnInit(): void {
    
  }

  public inputForm(event: any, inputNumber : number) : void {
    const data :string = event.target.value;
    this.onInputForm.emit([data , inputNumber]);
  } 

}
