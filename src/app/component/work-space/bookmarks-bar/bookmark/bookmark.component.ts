import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookmarkMode } from 'src/app/model/enum/BookmarkMode';
import { TableType } from 'src/app/model/enum/TableType';
import { Bookmark } from 'src/app/model/interface/Bookmark';


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  @Input() bookmark!: Bookmark;
  @Output() onColseBookmark = new EventEmitter();
  @Output() onChooseBookmark = new EventEmitter();
  public title : string = "";
  constructor() { }

  ngOnInit(): void {
    if(this.bookmark.table == TableType.ORGANIZATION && this.bookmark.mode == BookmarkMode.ListOfEntities)
      this.title = "Список Организаций"
    if(this.bookmark.table == TableType.ORGANIZATION && this.bookmark.mode == BookmarkMode.EntityConstructor)
    this.title = "Редактор организации"
    if(this.bookmark.table == TableType.EMPLOYEE && this.bookmark.mode == BookmarkMode.ListOfEntities)
      this.title = "Список сотрудников"
    if(this.bookmark.table == TableType.EMPLOYEE && this.bookmark.mode == BookmarkMode.EntityConstructor)
    this.title = "Редактор сотрудника"
    if(this.bookmark.table == TableType.SUBDIVIZON && this.bookmark.mode == BookmarkMode.ListOfEntities)
      this.title = "Список подразделений"
    if(this.bookmark.table == TableType.SUBDIVIZON && this.bookmark.mode == BookmarkMode.EntityConstructor)
    this.title = "Редактор подразделения"
    if(this.bookmark.table == TableType.ASSIGMENT && this.bookmark.mode == BookmarkMode.ListOfEntities)
      this.title = "Список поручений"
    if(this.bookmark.table == TableType.ASSIGMENT && this.bookmark.mode == BookmarkMode.EntityConstructor)
    this.title = "Редактор поручения"
    }

  public closeBookmark(){
    const value : number =  this.bookmark.id !== undefined? this.bookmark.id : -1; 
    this.onColseBookmark.emit(value.toString());
  }

  public chooseBookmark(){
    this.onChooseBookmark.emit(this.bookmark);
  }

}
