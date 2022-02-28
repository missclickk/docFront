import { Component, Inject, Input, NgModule, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { ActionType } from 'src/app/model/enum/ActionType';
import { BookmarkMode } from 'src/app/model/enum/BookmarkMode';
import { TableType } from 'src/app/model/enum/TableType';
import { MenuItem } from 'src/app/model/interface/MenuItem';
import { ColumsFactoryService } from 'src/app/service/components-factorys/colums-factory.service';
import { DataStorageService } from 'src/app/service/data-storage.service';
import { EntityService } from 'src/app/service/entityService/EntityService';
import { ServiceFactoryService } from 'src/app/service/entityService/service-factory.service';
import { StateService } from 'src/app/service/state.service';
import { TableService } from 'src/app/service/table.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers:[]
})
export class ItemComponent implements OnInit {
  @Input() menuItem!: MenuItem ;
  @Input() isChild = false;
  public isCollapsed = true;  
  private service : EntityService;
  
  constructor(private state : StateService, private factory : ColumsFactoryService, 
    private serviceFactory : ServiceFactoryService, public tableService: TableService, public dataStorage :DataStorageService ) {

     }

  public showChilds(collapse:NgbCollapse) : void {
    if(this.menuItem.child)
      collapse.toggle();
  }

  public createBookmark() : void {
      const state = new Map<string,string[]>();
      state.set( "columns",this.factory.getColumns(this.menuItem.tableType));
      this.state.addBookmark({table:this.menuItem.tableType, mode : BookmarkMode.ListOfEntities,state, action : ActionType.NONE });
      this.setTableData();
    }

  ngOnInit(): void {
  }

  private setTableData() : void {  
    this.service = this.serviceFactory.getService(this.state.getCurrentBookmark()?.table || TableType.NONE);
    this.service.getPage(1).subscribe(
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


}
