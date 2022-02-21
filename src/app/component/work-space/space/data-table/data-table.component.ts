import { Component, OnInit } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';
import { EntityService } from 'src/app/service/entityService/EntityService';
import { ServiceFactoryService } from 'src/app/service/entityService/service-factory.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  public columns : string[] = [];
  private service : EntityService;
  constructor(public state: StateService, private factory : ServiceFactoryService ) {
    this.columns = state.getCurrentBookmark()?.state.get('columns') || [];
    this.service = factory.getService(state.getCurrentBookmark()?.table || TableType.NONE);     
  }

  ngOnInit(): void {
      this.service.getPage(1).subscribe(
        (result : any) => {
          console.error(result);
        }
      );          
  }

}
