import { Component, OnInit } from '@angular/core';
import { TableType } from 'src/app/model/enum/TableType';
import { Bookmark } from 'src/app/model/interface/Bookmark';
import { DataStorageService } from 'src/app/service/data-storage.service';
import { EntityService } from 'src/app/service/entityService/EntityService';
import { ServiceFactoryService } from 'src/app/service/entityService/service-factory.service';
import { StateService } from 'src/app/service/state.service';
import { TableService } from 'src/app/service/table.service';

@Component({
  selector: 'app-bookmarks-bar',
  templateUrl: './bookmarks-bar.component.html',
  styleUrls: ['./bookmarks-bar.component.css'],
})
export class BookmarksBarComponent implements OnInit {
  private service : EntityService;
  constructor(public state: StateService, private factory : ServiceFactoryService, public tableService: TableService, 
    public dataStorage :DataStorageService ) { }

  ngOnInit(): void {
  }

  public closeBookmark( id: string) : void {
    this.state.deleteBookmark(Number.parseInt(id));
  }

  public chooseBookmark( bookmark : Bookmark ) : void {
    this.state.setCurrentBookmark(bookmark);
    this.service = this.factory.getService(this.state.getCurrentBookmark()?.table || TableType.NONE);
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
