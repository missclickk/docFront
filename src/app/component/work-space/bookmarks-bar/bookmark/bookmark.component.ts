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
  }

  public closeBookmark(){
    const value : number =  this.bookmark.id !== undefined? this.bookmark.id : -1; 
    this.onColseBookmark.emit(value.toString());
  }

  public chooseBookmark(){
    this.onChooseBookmark.emit(this.bookmark);
  }

}
