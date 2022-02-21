import { Component, Inject, Input, NgModule, OnInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { BookmarkMode } from 'src/app/model/enum/BookmarkMode';
import { TableType } from 'src/app/model/enum/TableType';
import { MenuItem } from 'src/app/model/interface/MenuItem';
import { ColumsFactoryService } from 'src/app/service/components-factorys/colums-factory.service';
import { StateService } from 'src/app/service/state.service';


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
  constructor(private state : StateService, private factory : ColumsFactoryService) { }

  public showChilds(collapse:NgbCollapse) : void {
    if(this.menuItem.child)
      collapse.toggle();
  }

  public createBookmark() : void {
      const state = new Map<string,string[]>();
      state.set( "columns",this.factory.getColumns(this.menuItem.tableType));
      this.state.addBookmark({table:this.menuItem.tableType, mode : BookmarkMode.ListOfEntities,state});
    }

  ngOnInit(): void {
  }

}
