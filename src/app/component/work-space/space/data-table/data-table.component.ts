import { Component, OnInit } from '@angular/core';
import { ButtonType } from 'src/app/model/enum/buttonType';
import { TableType } from 'src/app/model/enum/TableType';
import { ButtonActionFactoryService } from 'src/app/service/components-factorys/button-action-factory.service';
import { DataStorageService } from 'src/app/service/data-storage.service';
import { EntityService } from 'src/app/service/entityService/EntityService';
import { ServiceFactoryService } from 'src/app/service/entityService/service-factory.service';
import { StateService } from 'src/app/service/state.service';
import { TableService } from 'src/app/service/table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  public columns : string[] = [];
  public currentPage : number = 1;
  private service : EntityService;
  private isSingleClick = false;
  constructor(public state: StateService, private factory : ServiceFactoryService, public tableService: TableService, 
    public dataStorage :DataStorageService, private actionFactory : ButtonActionFactoryService ) {
    this.columns = state.getCurrentBookmark()?.state.get('columns') || [];
    this.service = factory.getService(state.getCurrentBookmark()?.table || TableType.NONE);     
  }


  ngOnInit(): void {
  }

  public getPage(page: any) : void {
    this.currentPage = page;
    this.service.getPage(this.currentPage).subscribe(
      (result : any) => {
        this.tableService.setRowsFromContent(result.content || []);
        const type : TableType = this.state.getCurrentBookmark()?.table || TableType.NONE;
        this.dataStorage.setDataToSotrage( type   ,result.content || []);
        this.tableService.setTotalRows(result.total || 0);
      
        
      },
      (error: any) =>{
        console.log(error);
      }
    );          

  }

  public focuse(event : any, index: number ) : void {
    this.tableService.setFocused(true);
    this.tableService.setFocusedRow(this.tableService.getRows().filter((el : any)=>  el.index == index  )[0])
    for( let elem of event.target.parentNode.parentNode.children )
      elem.className =  elem.className.split(" ").filter((el : any) => el != 'table-active').join(" ");
      event.target.parentNode.className += "table-active";
  }

  public clickEvent(event : any, index : number) : void {
        this.isSingleClick = true;
        setTimeout( ()=>{
          if(this.isSingleClick)
            this.focuse(event, index);
        }, 250);
  }

  public doubleClickEvent( event : any, index: number) : void {
      this.isSingleClick = false;
      this.tableService.setFocusedRow(this.tableService.getRows().filter((el : any)=>  el.index == index  )[0])      
      const action = this.actionFactory.getAction(ButtonType.UPDATE);
      action();
  }

}
